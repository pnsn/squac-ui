import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MeasurementPipe } from 'src/app/features/widgets/pipes/measurement.pipe';
import { DataFormatService } from 'src/app/features/widgets/services/data-format.service';
import { of } from 'rxjs';
import { Widget } from 'src/app/core/models/widget';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineComponent , MeasurementPipe],
      imports: [NgxDatatableModule, MatTooltipModule, HttpClientTestingModule],
      providers: [
        {
          provide: DataFormatService,
          useValue: {
            formattedData: of()
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    component.widget = new Widget(1, 1, 'name', 'description', 1, 1, 1, 1, 1, 1, 1, []);
    fixture.detectChanges();
    component.startdate = new Date();
    component.enddate = new Date();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});