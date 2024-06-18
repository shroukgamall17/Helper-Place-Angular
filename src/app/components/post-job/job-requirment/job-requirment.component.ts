import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MultipleSearchSelectComponent } from '../../post-resume/Post-Resume-Spares/Inputs/multiple-search-select/multiple-search-select.component';
import { DatepickerComponent } from '../../post-resume/Post-Resume-Spares/Inputs/datepicker/datepicker.component';
import { NgxSliderComponent } from '../Inputs/ngx-slider/ngx-slider.component';
import { MultipleChoiceComponent } from '../../post-resume/Post-Resume-Spares/Inputs/multiple-choice/multiple-choice.component';
import { JobRequirmentsService } from './Job-Requirments-Service/job-requirments-service.service';
import { FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-job-requirment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatepickerComponent,
    MdbFormsModule,
    MultipleSearchSelectComponent,
    NgxSliderComponent,
    MultipleChoiceComponent,
  ],
  templateUrl: './job-requirment.component.html',
  styleUrls: ['./job-requirment.component.css', '../post-job.component.css'],
})
export class JobRequirmentComponent {
  display() {
    console.log(this.formGroup);
  }
  @Input() formGroup!: FormGroup;
  JobRequirmentsService: JobRequirmentsService = new JobRequirmentsService();
  constructor() {}
  selectedJobPosition: number | null = null;
  selectedJobType: number | null = null;
  selectJobPositionLabel(labelNumber: number) {
    this.selectedJobPosition = labelNumber;
  }
  selectJobTypeLabel(labelNumber: number) {
    this.selectedJobType = labelNumber;
  }
}
