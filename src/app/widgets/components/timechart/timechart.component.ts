import { Component, OnDestroy, OnInit } from "@angular/core";
import { DateService } from "@core/services/date.service";
import { Measurement } from "@squacapi/models/measurement";
import { WidgetConnectService } from "../../services/widget-connect.service";
import { WidgetConfigService } from "../../services/widget-config.service";
import * as dayjs from "dayjs";

import { EChartComponent } from "../e-chart.component";
import { WidgetManagerService } from "../../services/widget-manager.service";
import { WidgetTypeComponent } from "../../interfaces/widget-type.interface";

@Component({
  selector: "widget-timechart",
  templateUrl: "../e-chart.component.html",
  styleUrls: ["../e-chart.component.scss"],
})
export class TimechartComponent
  extends EChartComponent
  implements OnInit, WidgetTypeComponent, OnDestroy
{
  constructor(
    private dateService: DateService,
    private widgetConfigService: WidgetConfigService,
    protected widgetConnectService: WidgetConnectService,
    protected widgetManager: WidgetManagerService
  ) {
    super(widgetManager, widgetConnectService);
  }
  // Max allowable time between measurements to connect
  maxMeasurementGap = 1.5;

  configureChart(): void {
    const chartOptions: any = {
      yAxis: {
        type: "value",
      },
      xAxis: {
        type: "time",
        name: "Measurement Start",

        axisPointer: {
          show: true,
          label: {
            formatter: this.widgetConfigService.timeAxisPointerLabelFormatting,
          },
        },
        axisLabel: {
          fontSize: 11,
          margin: 3,
          formatter: this.widgetConfigService.timeAxisTickFormatting,
        },
      },
      tooltip: {
        formatter: (params) => {
          return this.widgetConfigService.timeAxisFormatToolTip(params);
        },
      },
    };

    this.options = this.widgetConfigService.chartOptions(chartOptions);
  }

  buildChartData(data) {
    return new Promise<void>((resolve) => {
      this.visualMaps = this.widgetConfigService.getVisualMapFromThresholds(
        this.selectedMetrics,
        this.properties,
        2
      );
      const stations = [];
      this.metricSeries = {};
      const series = {
        type: "line",
        large: true,
        largeThreshold: 1000,
        legendHoverLink: true,
        lineStyle: {
          width: 1,
          opacity: 1,
        },
        emphasis: {
          focus: "series",
        },

        symbol: "circle",
        symbolSize: 2,
        sampling: "lttb",
      };
      // this.addThresholds();

      const metric = this.selectedMetrics[0];
      this.channels.forEach((channel) => {
        const nslc = channel.nslc;
        const station = {
          ...series,
          ...{
            name: nslc,
            id: nslc,
            data: [],
            count: 0,
            encode: {
              x: [0, 1],
              y: 2,
            },
          },
        };
        let lastEnd: dayjs.Dayjs;
        if (data.has(channel.id)) {
          const measurements = data.get(channel.id).get(metric.id);
          measurements?.forEach((measurement: Measurement) => {
            // // If time between measurements is greater than gap, don't connect
            const start = this.dateService.parseUtc(measurement.starttime);
            const end = this.dateService.parseUtc(measurement.endtime);

            if (
              station.data.length > 0 &&
              lastEnd &&
              this.dateService.diff(start, lastEnd) >=
                metric.sampleRate * this.maxMeasurementGap
            ) {
              // time since last measurement
              station.data.push({
                name: nslc,
                value: [lastEnd.toDate(), start.toDate(), "-"],
              });
            }

            station.data.push({
              name: nslc,
              value: [start.toDate(), end.toDate(), measurement.value],
            });

            lastEnd = end;
          });
        }
        stations.push(station);
      });
      this.metricSeries.series = stations;
      resolve();
    });
  }

  changeMetrics() {
    const colorMetric = this.selectedMetrics[0];
    const visualMap = this.visualMaps[colorMetric.id];

    this.updateOptions = {
      series: this.metricSeries.series,
      visualMap,
      xAxis: {
        min: this.widgetManager.starttime,
        max: this.widgetManager.endtime,
      },
    };

    if (this.echartsInstance) {
      this.echartsInstance.setOption(this.updateOptions, {
        replaceMerge: ["series"],
      });
    }
  }
}