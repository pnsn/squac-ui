import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MetricEditComponent } from "./metric-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MetricService } from "@squacapi/services/metric.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MaterialModule } from "../projects/squac-ui/src/app/shared/material.module";
import { MockBuilder } from "ng-mocks";

describe("MetricEditComponent", () => {
  let component: MetricEditComponent;
  let fixture: ComponentFixture<MetricEditComponent>;

  beforeEach(() => {
    return MockBuilder(MetricEditComponent)
      .mock(MaterialModule)
      .mock(MatDialogRef)
      .mock(MAT_DIALOG_DATA, {
        data: {},
      })
      .keep(ReactiveFormsModule)
      .keep(FormsModule)
      .mock(MetricService);
  });

  it("should create", () => {
    fixture = TestBed.createComponent(MetricEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});