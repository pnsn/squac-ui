import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { Metric } from "squacapi";
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from "@angular/forms";
import { MetricService } from "squacapi";
import { Subscription } from "rxjs";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "widget-edit-metrics",
  templateUrl: "./metric-edit.component.html",
  styleUrls: ["./metric-edit.component.scss"],
})
export class MetricEditComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  id: number;
  metric: Metric;
  editMode: boolean;

  metricForm: UntypedFormGroup = this.formBuilder.group({
    name: new UntypedFormControl("", Validators.required),
    description: new UntypedFormControl("", Validators.required),
    code: new UntypedFormControl("", Validators.required),
    refUrl: new UntypedFormControl("", Validators.required),
    unit: new UntypedFormControl("", Validators.required),
    sampleRate: new UntypedFormControl("", Validators.required),
    minVal: new UntypedFormControl(""),
    maxVal: new UntypedFormControl(""),
  });

  constructor(
    private metricService: MetricService,
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<MetricEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.metric = this.data.metric;
    this.editMode = !!this.metric;
    this.initForm();
  }

  // set up form
  initForm(): void {
    if (this.editMode) {
      this.metricForm.patchValue({
        name: this.metric.name,
        code: this.metric.code,
        description: this.metric.description,
        refUrl: this.metric.refUrl,
        unit: this.metric.unit,
        sampleRate: this.metric.sampleRate,
        minVal: this.metric.minVal,
        maxVal: this.metric.maxVal,
      });
    }
  }
  // Save metric information
  save(): void {
    const values = this.metricForm.value;
    this.metricService
      .updateOrCreate(
        new Metric(
          this.id,
          null,
          values.name,
          values.code,
          values.description,
          values.refUrl,
          values.unit,
          values.sampleRate,
          values.minVal,
          values.maxVal
        )
      )
      .subscribe({
        next: (result) => {
          this.cancel(result.id);
        },
        error: (error) => {
          console.error("error in save metric: ", error);
        },
      });
  }

  // route out of edit
  cancel(metricId?: number): void {
    this.dialogRef.close(metricId);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}