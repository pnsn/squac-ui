import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UntypedFormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ChannelGroupModule } from "../projects/squac-ui/src/app/features/channel-group/channel-group.module";
import { MockBuilder } from "ng-mocks";

import { MatchingRuleEditComponent } from "./matching-rule-edit.component";

describe("MatchingRuleEditComponent", () => {
  let component: MatchingRuleEditComponent;
  let fixture: ComponentFixture<MatchingRuleEditComponent>;

  beforeEach(() => {
    return MockBuilder(MatchingRuleEditComponent)
      .mock(ChannelGroupModule)
      .mock(ReactiveFormsModule)
      .keep(UntypedFormBuilder);
  });

  it("should create", () => {
    fixture = TestBed.createComponent(MatchingRuleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});