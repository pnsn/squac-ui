import { WidgetEditService } from "./widget-config.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ViewService } from "@core/services/view.service";
import { WidgetService } from "./widget.service";
import { ThresholdService } from "./threshold.service";
import { Widget } from "@features/widget/models/widget";
import { Metric } from "@core/models/metric";
import { ChannelGroup } from "@core/models/channel-group";
import { MockBuilder, MockRender, MockReset } from "ng-mocks";
import { EMPTY } from "rxjs";

describe("WidgetEditService", () => {
  const testMetric = new Metric(1, 1, "name", "code", "desc", "", "", 1);
  const testWidget = new Widget(1, 1, "name", "desc", 1, 1, 1, 1, 1, 1, 1, [
    testMetric,
  ]);

  const testThreshold = {
    id: 1,
    metric: { id: 1 },
    min: 0,
    max: 2,
    defaultMin: null,
    defaultMax: null,
  };

  beforeEach(() => {
    return MockBuilder(WidgetEditService, HttpClientTestingModule)
      .mock(ViewService)
      .mock(ThresholdService)
      .mock(WidgetService, {
        updateWidget: () => EMPTY,
      });
  });

  afterAll(MockReset);

  it("should be created", () => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    expect(service).toBeTruthy();
  });

  it("should set given widget", () => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    expect(service.getWidget()).toBeFalsy();

    service.setWidget(testWidget, 1);

    expect(service.getWidget()).toBeTruthy();
    expect(service.getWidget()).toEqual(testWidget);
  });

  it("should be valid if widget has all properties", (done: DoneFn) => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    testWidget.stattype = 1;
    service.setWidget(testWidget, 1);

    service.isValid.subscribe((isValid) => {
      expect(isValid).toBeTruthy();
      done();
    });

    service.updateMetrics([testMetric]);
  });

  it("should update thresholds", () => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    service.setWidget(testWidget, 1);

    expect(service.getThresholds()).toBeDefined();

    service.updateThresholds([testThreshold]);

    expect(service.getThresholds()[1]).toBeDefined();
    expect(service.getThresholds()[1].id).toEqual(1);
  });

  it("should return channel group", () => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    expect(service.getChannelGroup()).toBeUndefined();
    service.setWidget(testWidget, 1);

    const testChannelGroup = new ChannelGroup(1, 1, "", "", 1, []);

    service.updateChannelGroup(testChannelGroup);

    expect(service.getChannelGroup()).toEqual(testChannelGroup);
  });

  it("should return the metric Ids", () => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    service.setWidget(testWidget, 1);

    expect(service.getMetricIds()).toEqual([testMetric.id]);
  });

  it("should update the saved type", () => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    service.setWidget(testWidget, 1);
    const testTypeId = 2;
    service.updateType(testTypeId);

    expect(service.getWidget().typeId).toEqual(testTypeId);
  });

  it("should save the widget info", () => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    service.setWidget(testWidget, 1);

    const newName = "new name";
    service.updateWidgetInfo(newName, "desc", 1);

    expect(service.getWidget().name).toBe(newName);
  });

  it("should clear the saved widget information", () => {
    const service = MockRender(WidgetEditService).point.componentInstance;
    service.setWidget(testWidget, 1);

    service.clearWidget();

    expect(service.getWidget()).toBeNull();
  });
});