import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChannelGroupViewComponent } from "./channel-group-view.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ChannelGroupService } from "@squacapi/services/channel-group.service";
import { TableViewComponent } from "../projects/squac-ui/src/app/shared/components/table-view/table-view.component";
import { MockBuilder } from "ng-mocks";
import { AbilityModule } from "@casl/angular";
import { MaterialModule } from "../projects/squac-ui/src/app/shared/material.module";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
describe("ChannelGroupViewComponent", () => {
  let component: ChannelGroupViewComponent;
  let fixture: ComponentFixture<ChannelGroupViewComponent>;
  beforeEach(() => {
    return MockBuilder(ChannelGroupViewComponent)
      .keep(RouterTestingModule.withRoutes([]))
      .provide({
        provide: ActivatedRoute,
        useValue: {
          params: new Subject(),
        },
      })
      .mock(MaterialModule)
      .mock(TableViewComponent)
      .mock(AbilityModule)
      .mock(ChannelGroupService);
  });

  it("should create", () => {
    fixture = TestBed.createComponent(ChannelGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});