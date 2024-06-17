import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { JobClass } from '../post-job/JobClass/job-class';
import { FindjobService } from '../../services/findjob.service';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-job-slider',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  templateUrl: './available-job-slider.component.html',
  styleUrls: ['./available-job-slider.component.css']
})
export class AvailableJobSliderComponent implements OnInit {
  jobs: JobClass[] = [];
  chunkedJobs: any[][] = [];
  env: string = environment.baseUrl;

  constructor(library: FaIconLibrary, private jobService: FindjobService, private router:Router) {
    library.addIcons(faStar, faCalendar, faMapMarkerAlt);
  }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.jobService.GetJobHeadlines().subscribe((res) => {
      this.jobs = res;
      this.chunkedJobs = this.chunk(this.jobs, 3);
      console.log(this.chunkedJobs);
    });
  }

  chunk(arr: any[], size: number): any[][] {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
  navigateToDetails(jobId: number) {
    this.router.navigate([`JobDetails/${jobId}`]);
  }
}
