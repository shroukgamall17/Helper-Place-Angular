import { Injectable } from '@angular/core';
import { OptionsOfJobsAndCandidate } from '../../../OptionsOfJobsAndCandidates/options-of-jobs-and-candidate';

@Injectable({
  providedIn: 'root',
})
export class SideBarServiceService {
  constructor() {
    this.contractDropdownList = OptionsOfJobsAndCandidate.PreferredContractStatus
    this.skillsDropdownList = OptionsOfJobsAndCandidate.MainSkillsStatus
    this.jobtypeDropdownList=OptionsOfJobsAndCandidate.JobType
    let response = fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
      // Extracting official names of countries
      const officialNames = data.map(
        (country: { name: { common: any } }) => country.name.common
      );
      this.countrylocationDropdownList = officialNames;
      this.languageDropdownList = officialNames;
    })
    .catch((error) => console.error('Error fetching data:', error));
  }
  jobtypeDropdownList: string[] = [];
  countrylocationDropdownList: any = [];
  contractDropdownList: any = [];
  languageDropdownList: any = [];
  skillsDropdownList: any = [];
}
