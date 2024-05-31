import { Injectable } from '@angular/core';
import { QueryParams } from '../sidebar/Query-Params/query-params';
import { SideBarServiceService } from '../sidebar/SideBarService/side-bar-service.service';
import { JobClass } from '../../post-job/JobClass/job-class';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class JobListService {
  constructor(private HTTP: HttpClient) {}
  SideBarServiceService: SideBarServiceService = new SideBarServiceService();
  Jobs: JobClass[] = [];
  Filter(queryParams: QueryParams): Observable<JobClass[]> {
    console.log('hi');
    let url = `${environment.baseUrl}/Job/GetFilteredJobs?
    gender=${queryParams.gender}
    `;
    return this.HTTP.get<JobClass[]>(
      `${environment.baseUrl}/Job/GetFilteredJobs?gender=${
        queryParams.gender
      }&JobPosition=${queryParams.JobPosition}&JobType=${
        queryParams.JobType
      }&WorkingExperience=${queryParams.WorkingExperience}&Age=${
        queryParams.Age
      }&startdate=${queryParams.startdate.toJSON()}&countrysSelectedItems=${
        queryParams.countrysSelectedItems
      }&skillsSelectedItems=${
        queryParams.skillsSelectedItems
      }&languageSelectedItems=${
        queryParams.languageSelectedItems
      }&contractSelectedItems=${queryParams.contractSelectedItems}`
    );
  }
}
