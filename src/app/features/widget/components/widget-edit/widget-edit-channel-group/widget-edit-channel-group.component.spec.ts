import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetEditChannelGroupComponent } from "./widget-edit-channel-group.component";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { WidgetEditService } from "@features/widget/services/widget-edit.service";
import { ChannelGroupService } from "@features/channel-groups/services/channel-group.service";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UserService } from "@features/user/services/user.service";
import { OrganizationService } from "@features/user/services/organization.service";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule } from "@angular/forms";
import { MockBuilder } from "ng-mocks";
import { MaterialModule } from "@shared/material.module";
import { EMPTY } from "rxjs";

describe("WidgetEditChannelGroupComponent", () => {
  let component: WidgetEditChannelGroupComponent;
  let fixture: ComponentFixture<WidgetEditChannelGroupComponent>;

  beforeEach(() => {
    return MockBuilder(WidgetEditChannelGroupComponent)
      .mock(LoadingComponent)
      .mock(FormsModule)
      .mock(MatSlideToggleModule)
      .mock(MaterialModule)
      .mock(NgxDatatableModule)
      .provide({
        provide: WidgetEditService,
        useValue: {
          getChannelGroup: () => {
            return;
          },
        },
      })
      .provide({
        provide: OrganizationService,
        useValue: {
          getOrganization: () => {
            return EMPTY;
          },
        },
      })
      .mock(ChannelGroupService)
      .mock(UserService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditChannelGroupComponent);
    component = fixture.componentInstance;
    component.channelGroups = [];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});