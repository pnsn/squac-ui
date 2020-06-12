import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Metric } from 'src/app/core/models/metric';
import { Channel } from 'src/app/core/models/channel';
import { ViewService } from 'src/app/core/services/view.service';
import { ChannelGroup } from 'src/app/core/models/channel-group';
import { Widget } from 'src/app/core/models/widget';
import { Threshold } from 'src/app/features/widgets/models/threshold';
import { DataFormatService } from 'src/app/features/widgets/services/data-format.service';
import { Measurement } from 'src/app/features/widgets/models/measurement';

@Component({
  selector: 'app-timeseries',
  templateUrl: './timeseries.component.html',
  styleUrls: ['./timeseries.component.scss']
})
export class TimeseriesComponent implements OnInit, OnDestroy {
  @Input() widget: Widget;
  metrics: Metric[];
  thresholds: {[metricId: number]: Threshold};
  channelGroup: ChannelGroup;

  channels: Channel[];
  subscription = new Subscription();
  results: Array<any>;
  hasData: boolean;

  xAxisLabel = 'Measurement Start Date';
  yAxisLabel: string;
  currentMetric: Metric;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  constructor(
    private dataFormatService: DataFormatService,
    private viewService: ViewService
  ) { }

  ngOnInit() {
    this.metrics = this.widget.metrics;
    this.thresholds = this.widget.thresholds;
    this.channelGroup = this.widget.channelGroup;
    if ( this.channelGroup) {
      this.channels = this.channelGroup.channels;
    }

    const dateFormatSub = this.dataFormatService.formattedData.subscribe(
      response => {
        if (response) {
          this.currentMetric = this.metrics[0]; // TODO: get this a diffetent way
          this.buildChartData(response);
          this.viewService.status.next('finished');
        }
      }, error => {
        console.log('error in timeseries data: ' + error);
      }
    );

    this.subscription.add(dateFormatSub);
    const resizeSub = this.viewService.resize.subscribe(
      widgetId => {
        if (widgetId === this.widget.id) {
          this.resize();
        }
      }, error => {
        console.log('error in timeseries resize: ' + error);
      }
    );

    this.subscription.add(resizeSub);
  }

  private resize() {
    this.results = [...this.results];
  }


  buildChartData(data) {
    this.hasData = false;
    this.results = [];

    this.yAxisLabel = this.currentMetric.name;
    this.channels.forEach(
      channel => {
        const channelObj = {
          name : channel.nslc,
          series : []
        };

        data[channel.id][this.currentMetric.id].forEach(
          (measurement: Measurement) => {
            channelObj.series.push(
              {
                name: new Date(measurement.starttime),
                value: measurement.value
              }
            );
          }
        );

        this.hasData = !this.hasData ? data[channel.id][this.currentMetric.id].length > 0 : this.hasData;

        this.results.push(channelObj);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}