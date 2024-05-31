import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindjobService } from '../../../services/findjob.service';
import { JobClass } from '../../post-job/JobClass/job-class';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-find-job',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './find-job.component.html',
  styleUrl: './find-job.component.css'
})
export class FindJobComponent{
  @Input() Job:JobClass= new JobClass();
  jobs!: JobClass[];
  constructor(private jobService:FindjobService) {}
  getJobs() {
    this.jobService.GetJobHeadlines().subscribe((res)=> {
      this.jobs = res;
      console.log(res)
    })
  }
}
