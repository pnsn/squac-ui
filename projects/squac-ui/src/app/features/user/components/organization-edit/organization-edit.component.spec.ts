import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MaterialModule } from "../projects/squac-ui/src/app/shared/material.module";
import { MockBuilder } from "ng-mocks";
import { OrganizationEditComponent } from "./organization-edit.component";

describe("OrganizationEditComponent", () => {
  let component: OrganizationEditComponent;
  let fixture: ComponentFixture<OrganizationEditComponent>;

  beforeEach(() => {
    return MockBuilder(OrganizationEditComponent)
      .mock(MaterialModule)
      .mock(MatDialogRef)
      .mock(MAT_DIALOG_DATA, {
        data: {},
      })
      .keep(ReactiveFormsModule);
  });

  it("should create", () => {
    fixture = TestBed.createComponent(OrganizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});