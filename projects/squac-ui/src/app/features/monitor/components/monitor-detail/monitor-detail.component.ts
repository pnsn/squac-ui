import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DateService } from "@core/services/date.service";
import { LoadingService } from "@core/services/loading.service";
import { catchError, EMPTY, forkJoin, switchMap, tap } from "rxjs";
import {
  Alert,
  AlertService,
  Channel,
  ChannelGroup,
  ChannelGroupService,
  MetricService,
  Monitor,
  MonitorService,
  Widget,
} from "squacapi";
import {
  ProcessedData,
  WidgetConfigService,
  WidgetDataService,
  WidgetErrors,
  WidgetManagerService,
  WidgetType,
} from "widgets";

/**
 * Component for viewing single monitor
 */
@Component({
  selector: "monitor-detail",
  templateUrl: "./monitor-detail.component.html",
  styleUrls: ["./monitor-detail.component.scss"],
  providers: [WidgetConfigService, WidgetManagerService, WidgetDataService],
})
export class MonitorDetailComponent implements OnInit {
  @ViewChild("monitorChart") monitorChart;
  error: boolean;
  alerts: Alert[];
  monitor: Monitor;
  widget: Widget;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private monitorService: MonitorService,
    public loadingService: LoadingService,
    private dateService: DateService,
    private widgetManager: WidgetManagerService,
    private channelGroupService: ChannelGroupService,
    private metricService: MetricService,
    private widgetDataService: WidgetDataService,
    private widgetConfigService: WidgetConfigService
  ) {}
  // last n intervals
  /**
   * subscribes to route params
   */
  ngOnInit(): void {
    // get channel group info from route

    // listen to data changes
    const dataSub = this.widgetDataService.data$
      .pipe(
        tap({
          next: (data: ProcessedData | WidgetErrors) => {
            //check if data is a map and has data
            if (data instanceof Map) {
              const minMetrics = this.widgetManager.widgetConfig.minMetrics;
              const metricsWithData =
                this.widgetDataService.measurementsWithData.length;
              if (minMetrics > metricsWithData) {
              } else {
                // this.addWidget(this.widgetManager.widgetType);
                this.widgetConfigService.thresholds =
                  this.widgetManager.thresholds;
                this.widgetConfigService.dataRange =
                  this.widgetDataService.dataRange;
                this.monitorChart.updateData(data);
              }
            } else {
            }
          },
        })
      )
      .subscribe();
    const chanSub = this.route.data
      .pipe(
        tap(() => {
          this.error = false;
        }),
        switchMap((data) => {
          this.monitor = data["monitor"];
          const lastDay = this.dateService.subtractFromNow(1, "day").format();
          const params = {
            timestampGte: lastDay,
            monitor: this.route.params["monitorId"],
          };
          return this.loadingService.doLoading(
            forkJoin({
              alerts: this.alertService.list(params),
              channelGroup: this.channelGroupService.read(
                this.monitor.channelGroupId
              ),
            })
          );
        })
      )
      .subscribe({
        next: (results) => {
          this.alerts = results.alerts;

          this.widget = new Widget(
            0,
            0,
            "example",
            0,
            [this.monitor.metric],
            "latest"
          );
          this.widget.metrics = [this.monitor.metric];
          this.widget.type = WidgetType.TIMESERIES;
          this.widgetManager.initWidget(this.widget);
          this.widgetManager.widgetConfig;
          const lastDay = this.dateService.subtractFromNow(1, "day").format();
          const now = this.dateService.now().format();

          this.widgetManager.updateTimes(lastDay, now);
          this.widgetManager.updateChannels(
            this.monitor.channelGroupId,
            results.channelGroup.channels as Channel[]
          );

          this.widgetManager.updateWidgetType(WidgetType.TIMESERIES);
          this.widgetManager.updateMetrics(this.widget.metrics);
        },
      });
  }
}