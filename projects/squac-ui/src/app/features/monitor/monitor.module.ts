import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MonitorComponent } from "./components/monitor/monitor.component";
import { MonitorEditComponent } from "./components/monitor-edit/monitor-edit.component";
import { MonitorViewComponent } from "./components/monitor-view/monitor-view.component";
import { MonitorRoutingModule } from "./monitor-routing.module";
import { SharedModule } from "@shared/shared.module";
import { MonitorEditEntryComponent } from "./components/monitor-edit-entry/monitor-edit-entry.component";
import { AlertViewComponent } from "./components/alert-view/alert-view.component";
import { AbilityModule } from "@casl/angular";

@NgModule({
  declarations: [
    MonitorComponent,
    MonitorEditComponent,
    MonitorViewComponent,
    MonitorEditEntryComponent,
    AlertViewComponent,
  ],
  imports: [CommonModule, MonitorRoutingModule, SharedModule, AbilityModule],
})
export class MonitorModule {}