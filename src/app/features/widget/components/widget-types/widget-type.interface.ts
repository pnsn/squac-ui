import { Channel } from "@squacapi/models/channel";
import { Metric } from "@squacapi/models/metric";
import { WidgetProperties } from "@squacapi/models/widget";

export interface WidgetTypeComponent {
  data: any;
  channels: Channel[];
  selectedMetrics: Metric[];
  properties: WidgetProperties;
  visualMaps: any;
  emphasizedChannel?: string;
  deemphasizedChannel?: string;
  zooming?: string;
  loading?: string | boolean;
  showKey?: boolean;
  ngOnInit(): void;
  resize?(): void;
  updateData?(data: any): void;
  configureChart(): void;
}