import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FindJobComponent } from './find-job/find-job.component';
import { JobListService } from './JobListService/job-list.service';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FindjobService } from '../../services/findjob.service';
import { JobClass } from '../post-job/JobClass/job-class';
import { QueryParams } from './sidebar/Query-Params/query-params';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
@Component({
  selector: 'app-job-page',
  standalone: true,
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.css',
  imports: [
    HeaderComponent,
    SidebarComponent,
    FindJobComponent,
    CommonModule,
    MatPaginatorModule,
  ],
})
export class JobPageComponent {
  Jobs!: JobClass[];
  currentPage: number = 1;
  pageSize: number = 5;
  constructor(
    private _findJob: FindjobService,
    public JobData: JobListService
  ) {}
  ngOnInit(): void {
    this._findJob.GetJobHeadlines().subscribe({
      next: (response) => {
        this.Jobs = response;
        console.log(this.Jobs);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  QueryOverData($event: QueryParams) {
    this.JobData.Filter($event).subscribe({
      next: (response) => {
        this.Jobs = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }
  get endIndex(): number {
    return Math.min(this.startIndex + this.pageSize, this.Jobs.length);
  }
  onPageChange(event: { pageIndex: number }): void {
    this.currentPage = event.pageIndex + 1;
  }
}
