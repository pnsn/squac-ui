import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChannelGroupDetailComponent } from "./channel-group-detail.component";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { ChannelGroup } from "@squacapi/models/channel-group";
import { RouterTestingModule } from "@angular/router/testing";
import { MockBuilder } from "ng-mocks";
import { ChannelGroupModule } from "../projects/squac-ui/src/app/features/channel-group/channel-group.module";
import { MessageService } from "../projects/squac-ui/src/app/core/services/message.service";
import { ConfirmDialogService } from "../projects/squac-ui/src/app/core/services/confirm-dialog.service";
import { ChannelGroupService } from "@squacapi/services/channel-group.service";
import { LoadingService } from "../projects/squac-ui/src/app/core/services/loading.service";

describe("ChannelGroupDetailComponent", () => {
  let component: ChannelGroupDetailComponent;
  let fixture: ComponentFixture<ChannelGroupDetailComponent>;
  let router;

  beforeEach(() => {
    return MockBuilder(ChannelGroupDetailComponent)
      .mock(ChannelGroupModule)
      .mock([
        MessageService,
        ConfirmDialogService,
        ChannelGroupService,
        LoadingService,
      ])
      .mock(RouterTestingModule.withRoutes([]))
      .provide({
        provide: ActivatedRoute,
        useValue: {
          snapshot: {},
          params: of({
            channelGroup: new ChannelGroup(1, 1, "name", "description", 1),
          }),
        },
      });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to channel group", () => {
    const routerSpy = spyOn(router, "navigate");
    component.editChannelGroup();
    expect(routerSpy).toHaveBeenCalled();
  });
});