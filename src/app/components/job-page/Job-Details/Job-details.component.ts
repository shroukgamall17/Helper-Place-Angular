import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Loginservice } from '../../login/LoginService/loginservice.service';
import { JobClass } from '../../post-job/JobClass/job-class';
import { FindjobService } from '../../../services/findjob.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './Job-details.component.html',
  styleUrls: ['./Job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  Job: JobClass = new JobClass();
  jobs: JobClass[] = [];
  randomJobs: any[] = [];

  constructor(
    private route: ActivatedRoute,
    public loginService: Loginservice,
    private JobService: FindjobService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getJobs();
    this.route.params.subscribe((params) => {
      const jobId = params['id'];
      if (jobId) {
        this.JobService.getJobById(jobId).subscribe({
          next: (response) => {
            this.Job = response;
          },
          error: (error) => {
            console.error('Error fetching job details:', error);
          },
        });
      }
    });
  }

  getJobs() {
    this.JobService.GetJobHeadlines().subscribe((res) => {
      this.jobs = res;
      this.selectRandomJobs();
    });
  }

  getCompletionYearDate(ed: any): string {
    if (ed) {
      const date = new Date(ed);
      return date.toLocaleDateString();
    }
    return '';
  }

  getref(ref: boolean): string {
    return ref ? 'I have a reference letter' : 'I don\'t have a reference letter';
  }

  selectRandomJobs() {
    const usedIndexes = new Set<number>();

    while (this.randomJobs.length < 4 && usedIndexes.size < this.jobs.length) {
      const randomIndex = Math.floor(Math.random() * this.jobs.length);
      if (!usedIndexes.has(randomIndex)) {
        usedIndexes.add(randomIndex);
        this.randomJobs.push(this.jobs[randomIndex]);
      }
    }
  }

  navigateToDetails(jobId: number) {
    this.router.navigate([`JobDetails/${jobId}`]);
  }
}
