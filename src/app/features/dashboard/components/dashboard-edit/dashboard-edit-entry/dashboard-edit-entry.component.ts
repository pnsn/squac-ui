import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DashboardService } from "@features/dashboard/services/dashboard.service";
import { DashboardEditComponent } from "../dashboard-edit.component";

@Component({
  selector: "dashboard-edit-entry",
  template: "",
})
export class DashboardEditEntryComponent implements OnInit, OnDestroy {
  dialogRef;
  dashboardId;
  paramsSub;
  dashboard;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private dashboardsService: DashboardService
  ) {}

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe(() => {
      if (this.route.parent) {
        this.dashboardId = +this.route.parent.snapshot.params.dashboardId;
        this.dashboard = this.route.parent.snapshot.data.dashboard;
      }

      if (this.dashboardId && !this.dashboard) {
        this.dashboardsService
          .getDashboard(this.dashboardId)
          .subscribe((dashboard) => {
            this.dashboard = dashboard;
            this.openDashboard();
          });
      } else {
        this.openDashboard();
      }
    });
  }

  openDashboard() {
    this.dialogRef = this.dialog.open(DashboardEditComponent, {
      closeOnNavigation: true,
      data: {
        dashboard: this.dashboard,
      },
    });
    this.dialogRef.afterClosed().subscribe(
      (id?: number) => {
        // go to newly created dashboard
        if (!this.dashboardId && id) {
          this.router.navigate(["../", id], { relativeTo: this.route });
        } else {
          this.router.navigate(["../"], { relativeTo: this.route });
        }
        // route to exit
      },
      (error) => {
        console.log("error in monitor detail: " + error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.paramsSub.unsubscribe();
  }
}