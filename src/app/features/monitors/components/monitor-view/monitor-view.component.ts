import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelGroup } from '@core/models/channel-group';
import { Metric } from '@core/models/metric';
import { Monitor } from '@features/monitors/models/monitor';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-monitor-view',
  templateUrl: './monitor-view.component.html',
  styleUrls: ['./monitor-view.component.scss']
})
export class MonitorViewComponent implements OnInit {
  monitors: Monitor[];

  selected: Monitor[];

  selectedMonitorId: number;

  metrics: Metric[];
  channelGroups: ChannelGroup[];
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // Table stuff
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  ngOnInit(): void {
    this.selected = [];
    this.monitors = this.route.parent.snapshot.data.monitors;
    if (this.route.snapshot && this.route.snapshot.data) {
      this.metrics = this.route.snapshot.data.metrics;
      this.channelGroups = this.route.snapshot.data.channelGroups;
    }
    if (this.route.firstChild) {
      this.selectedMonitorId = +this.route.firstChild.snapshot.params.monitorId;
      this.selectMonitor(this.selectedMonitorId);
    }
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.selected = [...this.selected];
  }

  channelGroupName(id : number) : string{
    const group = this.channelGroups.find(cG => cG.id === id)
    return group ? group.name : "unknown";
  }

  metricName(id : number) : string {
    const metric = this.metrics.find(m => m.id === id)
    return metric ? metric.name : "unknown";
  }

  addMonitor() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

    // Getting a selected channel group and setting variables
  selectMonitor(selectedMonitorId: number) {
    this.selected = this.monitors.filter( cg => { // Select row with channel group
      return (cg.id === selectedMonitorId);
    });
  }

  // onSelect function for data table selection
  onSelect($event) { // When a row is selected, route the page and select that channel group
    const selectedId = $event.selected[0].id;
    if (selectedId) {
      this.router.navigate([selectedId], {relativeTo: this.route});
      this.selectedMonitorId = selectedId;
      this.selectMonitor(selectedId);
    }
  }

}