import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { Dashboard } from "../../models/dashboard";
import { UserService } from "@features/user/services/user.service";
import { ColumnMode, SelectionType } from "@swimlane/ngx-datatable";
import { UserPipe } from "@shared/pipes/user.pipe";
import { OrganizationPipe } from "@shared/pipes/organization.pipe";
import { OrganizationService } from "@features/user/services/organization.service";

@Component({
  selector: "dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.scss"],
})
export class DashboardViewComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  dashboards: Dashboard[];
  rows: Dashboard[];
  subscription: Subscription = new Subscription();
  activeDashboardId: number;
  userId: number;
  orgId: number;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  userPipe;
  orgPipe;
  selected = [];
  selectedId: number;
  columns;
  searchString = "";
  hideShared = true;
  @ViewChild("sharingTemplate") sharingTemplate: TemplateRef<any>;
  @ViewChild("nameTemplate") nameTemplate: TemplateRef<any>;

  messages = {
    emptyMessage: "You have no dashboards.",
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private orgService: OrganizationService
  ) {
    this.userPipe = new UserPipe(orgService);
    this.orgPipe = new OrganizationPipe(orgService);
  }

  ngOnInit() {
    const activeDashboardSub = this.route.params.subscribe({
      next: (params: Params) => {
        this.activeDashboardId = +params.dashboardId;
      },
      error: (error) => {
        console.log("error in dashboard view " + error);
      },
    });

    const dashboardsSub = this.route.data.subscribe((data) => {
      if (data.dashboards && data.dashboards.error) {
        console.log("error in dashboard");
      } else {
        this.dashboards = [...data.dashboards];
      }
    });

    const userService = this.userService.user.subscribe((user) => {
      this.userId = user ? user.id : null;
      this.orgId = user ? user.orgId : null;
      this.toggleSharing({ checked: this.hideShared });
    });

    // this.subscription.add(dashboardsService);
    this.subscription.add(userService);
    this.subscription.add(dashboardsSub);
    this.subscription.add(activeDashboardSub);
  }

  // onSelect function for data table selection
  onSelect($event) {
    // When a row is selected, route the page and select that channel group
    const selectedId = $event.selected[0].id;
    if (selectedId) {
      this.router.navigate([selectedId], { relativeTo: this.route });
      this.selectedId = selectedId;
      this.selectDashboard(selectedId);
    }
  }

  ngAfterViewInit(): void {
    this.columns = [
      {
        name: "Dashboard Name",
        draggable: false,
        sortable: true,
        cellTemplate: this.nameTemplate,
      },
      { name: "Description", draggable: false, sortable: true },
      {
        name: "Owner",
        prop: "owner",
        draggable: false,
        sortable: true,
        width: 50,
        pipe: this.userPipe,
        comparator: this.userComparator.bind(this),
      },
      {
        name: "Organization",
        prop: "orgId",
        draggable: false,
        sortable: true,
        canAutoResize: false,
        width: 120,
        pipe: this.orgPipe,
        comparator: this.orgComparator.bind(this),
      },
      {
        name: "Sharing",
        draggable: false,
        canAutoResize: false,
        width: 150,
        sortable: false,
        cellTemplate: this.sharingTemplate,
      },
    ];
  }

  // Getting a selected channel group and setting variables
  selectDashboard(selectedId: number) {
    this.selected = this.dashboards.filter((d) => {
      // Select row with channel group
      return d.id === selectedId;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  newDashboard() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    if (val) {
      this.hideShared = false;
    }
    // filter our data
    const temp = this.dashboards.filter((d) => {
      return (
        !val ||
        d.name.toLowerCase().indexOf(val) !== -1 ||
        d.description.toLowerCase().indexOf(val) !== -1
      );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  removeFilter() {
    this.rows = [...this.dashboards];
    this.searchString = "";
  }

  toggleSharing({ checked }) {
    if (checked) {
      const temp = this.dashboards.filter((d) => {
        return this.userId === d.owner;
      });
      this.rows = temp;
    } else {
      this.rows = [...this.dashboards];
    }
    this.hideShared = checked;
  }

  userComparator(userIdA, userIdB) {
    const userNameA = this.userPipe.transform(userIdA).toLowerCase();
    const userNameB = this.userPipe.transform(userIdB).toLowerCase();

    if (userNameA < userNameB) {
      return -1;
    }
    if (userNameA > userNameB) {
      return 1;
    }
  }

  orgComparator(orgIdA, orgIdB) {
    const orgNameA = this.orgPipe.transform(orgIdA).toLowerCase();
    const orgNameB = this.orgPipe.transform(orgIdB).toLowerCase();

    if (orgNameA < orgNameB) {
      return -1;
    }
    if (orgNameA > orgNameB) {
      return 1;
    }
  }
}