import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { Threshold } from "@features/widget/models/threshold";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { Metric } from "@core/models/metric";
import { WidgetConfigService } from "@features/widget/services/widget-config.service";
import { Subscription } from "rxjs";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: "widget-edit-options",
  templateUrl: "./widget-edit-options.component.html",
  styleUrls: ["./widget-edit-options.component.scss"],
})
export class WidgetEditOptionsComponent implements OnChanges, OnDestroy {
  constructor(
    private widgetConfigService: WidgetConfigService,
    private formBuilder: FormBuilder
  ) {
    this.gradientOptions = this.widgetConfigService.gradientOptions;
    this.solidOptions = this.widgetConfigService.solidOptions;
    this.widgetTypes = this.widgetConfigService.widgetTypes;
  }
  @Input() selectedMetrics: Metric[];
  @Input() type: string;
  @Input() thresholds: Threshold[];
  @Output() thresholdsChange = new EventEmitter<Threshold[]>();
  @Input() properties: any;
  @Output() propertiesChange = new EventEmitter<any>();

  widgetTypes;
  widgetType;
  gradientOptions;
  solidOptions;
  subscriptions: Subscription = new Subscription();

  optionsForm: FormGroup = this.formBuilder.group({
    thresholdArray: this.formBuilder.array([]),
    dimensions: this.formBuilder.array([]),
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.thresholdArray.valueChanges.subscribe((values) => {
      if (this.thresholdArray.valid) {
        this.thresholdsChange.emit(values);
      }
    });
  }

  //what happens if you change widget type but don't change this
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.selectedMetrics) {
      //cleanup old settings
    }

    if (changes.properties && changes.properties.currentValue) {
      if (!this.properties.dimensions) {
        this.properties.dimensions = [];
      }
    }

    if (changes.type) {
      this.widgetType = this.widgetTypes.find((type) => {
        return this.type === type.type;
      });
      this.makeDimensionsForm();
      //update which display options available
    }

    if (
      changes.thresholds &&
      !changes.thresholds.previousValue &&
      this.thresholds
    ) {
      this.thresholds.forEach((threshold) => {
        this.addThreshold(threshold);
      });
      if (this.thresholds.length === 0) {
        this.addThreshold();
      }
    }
  }

  gradient(color: Array<string>) {
    return "linear-gradient(" + color.toString + ")";
  }

  makeDimensionsForm() {
    const selected = this.properties.dimensions;
    this.dimensions.clear();
    this.dimensions.valueChanges.subscribe((values) => {
      this.properties.dimensions = values;
      this.propertiesChange.emit(this.properties);
    });
    if (
      this.widgetType &&
      this.widgetType.dimensions &&
      this.selectedMetrics.length > 0
    ) {
      this.widgetType.dimensions.forEach((dimension, i) => {
        const dim = selected.find((m) => {
          return dimension === m.type;
        });

        let metricId;
        if (dim) {
          metricId = dim.metricId;
        } else if (this.selectedMetrics[i]) {
          metricId = this.selectedMetrics[i].id;
        } else {
          metricId = this.selectedMetrics[0].id;
        }

        this.dimensions.push(
          this.formBuilder.group({
            type: [dimension], //default to piecewise
            metricId: [metricId],
          })
        );
      });
    }
  }

  makeThresholdForm(threshold?: Threshold) {
    return this.formBuilder.group({
      type: [threshold ? threshold.type : "piecewise", Validators.required], //default to piecewise
      min: [threshold ? threshold.min : null],
      max: [threshold ? threshold.max : null],
      inRange: [
        threshold ? this.findColor(threshold.inRange.type) : null,
        Validators.required,
      ],
      outOfRange: [
        threshold ? this.findColor(threshold.outOfRange.type) : null,
        Validators.required,
      ],
      metrics: [threshold ? threshold.metrics : [], Validators.required],
      numSplits: [threshold ? threshold.numSplits : 5, Validators.required],
      reverseColors: [
        threshold ? threshold.reverseColors : false,
        Validators.required,
      ],
    });
  }

  //find colors in options using the type
  findColor(type) {
    const t = [...this.gradientOptions, ...this.solidOptions].find((option) => {
      return option.type === type;
    });
    return t;
  }

  //check if thresholds valid
  validateThreshold(values, thresholdFormGroup) {
    const type = values.type;
    const numSplits = thresholdFormGroup.get("numSplits");
    const reverseColors = thresholdFormGroup.get("reverseColors");

    if (type === "piecewise") {
      numSplits.enable({ emitEvent: false });
      reverseColors.enable({ emitEvent: false });
    } else if (type === "binary") {
      numSplits.setValue(1, { emitEvent: false });
      reverseColors.setValue(false, { emitEvent: false });
      numSplits.disable({ emitEvent: false });
      reverseColors.disable({ emitEvent: false });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get thresholdArray(): FormArray {
    return this.optionsForm.get("thresholdArray") as FormArray;
  }

  get dimensions(): FormArray {
    return this.optionsForm.get("dimensions") as FormArray;
  }

  // Add a new threshold
  addThreshold(threshold?: Threshold) {
    const thresholdFormGroup = this.makeThresholdForm(threshold);
    this.validateThreshold(threshold, thresholdFormGroup);
    thresholdFormGroup.valueChanges.subscribe((value) => {
      this.validateThreshold(value, thresholdFormGroup);
    });
    this.thresholdArray.push(thresholdFormGroup, { emitEvent: false });
  }

  // Remove given threshold
  removeThreshold(index) {
    this.thresholdArray.removeAt(index);
  }

  getMetric(metricId: number) {
    const metric = this.selectedMetrics?.find((metric) => {
      return metric.id === +metricId;
    });
    return metric?.name;
  }
}