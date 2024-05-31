import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Loginservice } from '../../login/LoginService/loginservice.service';
import { JobClass } from '../../post-job/JobClass/job-class';
import { FindjobService } from '../../../services/findjob.service';

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './Job-details.component.html',
  styleUrl: './Job-details.component.css',
})
export class JobDetailsComponent implements OnInit {
  Job: JobClass = new JobClass();
  constructor(
    private route: ActivatedRoute,
    public loginService: Loginservice,
    private JobService: FindjobService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']); // Convert to number (if needed)
      this.JobService.getJobById(params['id']).subscribe({
        next: (Response) => {
          console.log(Response)
          this.Job = Response;
        },
        error: (Error) => {
          console.log(Error);
        },
      });
    });
  }
  getCompletionYearDate(ed: any): string {
    if (ed) {
      const date = new Date(ed);
      return date.toLocaleDateString().toString();
    }
    return '';
  }
  getref(ref: boolean): string {
    if (ref) {
      return 'i have reference letter';
    } else return 'i dont have reference letter';
  }
}
