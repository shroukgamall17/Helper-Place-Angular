import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindjobService } from '../../../services/findjob.service';
import { JobClass } from '../../post-job/JobClass/job-class';
import { RouterLink } from '@angular/router';
import { TruncateWordsPipe } from '../../../pipes/truncate-words.pipe';

@Component({
  selector: 'app-find-job',
  standalone: true,
  templateUrl: './find-job.component.html',
  styleUrl: './find-job.component.css',
  imports: [CommonModule, RouterLink, TruncateWordsPipe],
})
export class FindJobComponent {
  @Input() Job: JobClass = new JobClass();
  jobs!: JobClass[];
  constructor(private jobService: FindjobService) {}
  getJobs() {
    // this.jobService.GetJobHeadlines().subscribe((res) => {
    //   this.jobs = res;
    // });
    this.jobService.GetJobHeadlines().subscribe({
      next:(res)=>{
        this.jobs=res;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  handleDate(date: any) {
    return new Date(date);
  }
}
