import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobRequirmentsClass } from '../job-requirment/JobRequirmentsClass/job-requirments-class';
import {
  AboutYouClass,
  Else,
  Family,
  Fix,
  Range,
} from '../about-you/AboutYouClass/about-you-class';
import { JobDetailsClass } from '../job-details/JobDetailsClass/job-details-class';
import { HttpClient } from '@angular/common/http';
import { JobClass } from '../JobClass/job-class';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostJobService {
  JobRequirmentsForm = new FormGroup({
    PositionOffered: new FormControl('', Validators.required),
    Type: new FormControl('', Validators.required),
    Location: new FormControl('', Validators.required),
    StartDate: new FormControl(new Date(), Validators.required),
    LanguageSkills: new FormControl([], Validators.required),
    MainSkills: new FormControl([], Validators.required),
    CookingSkills: new FormControl([], Validators.required),
    OtherSkills: new FormControl([], Validators.required),
    MostImportantSkills: new FormControl([], Validators.required),
    PreferedCandidateLocation: new FormControl('', Validators.required),
    PreferedCandidateContract: new FormControl('', Validators.required),
    Gender: new FormControl('', Validators.required),
    Nationality: new FormControl([], Validators.required),
    Education: new FormControl('', Validators.required),
    Religion: new FormControl([], Validators.required),
    MinimumAge: new FormControl(18, Validators.required),
    MaximumAge: new FormControl(25, Validators.required),
    MinimumExperience: new FormControl(0, Validators.required),
    MaximumExperience: new FormControl(5, Validators.required),
  });
  ReturnJobRequirmentObject(): JobRequirmentsClass {
    const JobRequirmentObject = new JobRequirmentsClass();
    JobRequirmentObject.basicInformation.location =
      this.JobRequirmentsForm.get('Location')?.value!;
    JobRequirmentObject.basicInformation.positionOffered =
      this.JobRequirmentsForm.get('PositionOffered')?.value!;
    JobRequirmentObject.basicInformation.startDate =
      this.JobRequirmentsForm.get('StartDate')?.value!;
    JobRequirmentObject.basicInformation.type =
      this.JobRequirmentsForm.get('Type')?.value!;
    JobRequirmentObject.requiredSkillsAndDuties.cookingSkills =
      this.JobRequirmentsForm.get('CookingSkills')?.value!;
    JobRequirmentObject.requiredSkillsAndDuties.mainSkills =
      this.JobRequirmentsForm.get('MainSkills')?.value!;
    JobRequirmentObject.requiredSkillsAndDuties.languageSkills =
      this.JobRequirmentsForm.get('LanguageSkills')?.value!;
    JobRequirmentObject.requiredSkillsAndDuties.otherSkills =
      this.JobRequirmentsForm.get('OtherSkills')?.value!;
    JobRequirmentObject.requiredSkillsAndDuties.mostImportantSkills =
      this.JobRequirmentsForm.get('MostImportantSkills')?.value!;
    JobRequirmentObject.candidatePreference.preferedCandidateLocation =
      this.JobRequirmentsForm.get('PreferedCandidateLocation')?.value!;
    JobRequirmentObject.candidatePreference.preferedCandidateContract =
      this.JobRequirmentsForm.get('PreferedCandidateContract')?.value!;
    JobRequirmentObject.candidatePreference.gender =
      this.JobRequirmentsForm.get('Gender')?.value!;
    JobRequirmentObject.candidatePreference.nationality =
      this.JobRequirmentsForm.get('Nationality')?.value!;
    JobRequirmentObject.candidatePreference.education =
      this.JobRequirmentsForm.get('Education')?.value!;
    JobRequirmentObject.candidatePreference.religion =
      this.JobRequirmentsForm.get('Religion')?.value!;
    JobRequirmentObject.candidatePreference.ageRequired[0] =
      this.JobRequirmentsForm.get('MinimumAge')?.value!;
    JobRequirmentObject.candidatePreference.ageRequired[1] =
      this.JobRequirmentsForm.get('MaximumAge')?.value!;
    JobRequirmentObject.candidatePreference.experienceYearsRequired[0] =
      this.JobRequirmentsForm.get('MinimumExperience')?.value!;
    JobRequirmentObject.candidatePreference.experienceYearsRequired[1] =
      this.JobRequirmentsForm.get('MaximumExperience')?.value!;
    return JobRequirmentObject;
  }
  AboutYouForm = new FormGroup({
    EmployerType: new FormControl('', Validators.required),
    Family: new FormGroup({
      FamilyType: new FormControl(''),
      HavePets: new FormControl(false),
      Nationality: new FormControl(''),
    }),
    ReceiveByEmail: new FormControl(false),
    Email: new FormControl('', [Validators.required, Validators.email]),
    DayOFF: new FormControl('', Validators.required),
    Accomodation: new FormControl('', Validators.required),
    MonthlySalaryOffer: new FormControl('', Validators.required),
    Fix: new FormGroup({
      MonthlySalary: new FormControl(0),
      Currency: new FormControl(''),
    }),
    Range: new FormGroup({
      MaxSalary: new FormControl(0),
      MinSalary: new FormControl(0),
      Currency: new FormControl(''),
    }),
    Else: new FormGroup({
      Description: new FormControl(''),
    }),
  });
  ReturnAboutYouObject(): import('../about-you/AboutYouClass/about-you-class').AboutYouClass {
    const AboutYouObject = new AboutYouClass();
    AboutYouObject.aboutYouSub.email = this.AboutYouForm.get('Email')?.value!;
    AboutYouObject.aboutYouSub.receiveByEmail =
      this.AboutYouForm.get('ReceiveByEmail')?.value!;
    if (this.AboutYouForm.get('EmployerType')!.value == 'Family') {
      AboutYouObject.aboutYouSub.employerType = this.returnfamilyobject();
    } else {
      AboutYouObject.aboutYouSub.employerType.type =
        this.AboutYouForm.get('EmployerType')?.value!;
    }
    AboutYouObject.offersToCandidate.accomodation =
      this.AboutYouForm.get('Accomodation')?.value!;
    AboutYouObject.offersToCandidate.dayOFF =
      this.AboutYouForm.get('DayOFF')?.value!;
    if (this.AboutYouForm.get('MonthlySalaryOffer')!.value == 'Dont-Mention') {
      AboutYouObject.offersToCandidate.monthlySalaryOffer.title =
        this.AboutYouForm.get('MonthlySalaryOffer')?.value!;
    } else {
      AboutYouObject.offersToCandidate.monthlySalaryOffer =
        this.returnsalaryobject()!;
    }
    return AboutYouObject;
  }
  returnsalaryobject() {
    switch (this.AboutYouForm.get('MonthlySalaryOffer')?.value) {
      case 'Fix':
        let fix = new Fix();
        fix.title = 'Fix';
        fix.monthlySalary = Number(
          this.AboutYouForm.get('Fix.MonthlySalary')?.value!
        );
        fix.currency = this.AboutYouForm.get('Fix.Currency')?.value!;
        return fix;
      case 'Range':
        let range = new Range();
        range.title = 'Range';
        range.maxSalary = Number(
          this.AboutYouForm.get('Range.MaxSalary')?.value!
        );
        range.minSalary = Number(
          this.AboutYouForm.get('Range.MinSalary')?.value!
        );
        range.currency = this.AboutYouForm.get('Range.Currency')?.value!;
        return range;
      case 'Else':
        let elsee = new Else();
        elsee.title = 'Else';
        elsee.description = this.AboutYouForm.get('Else.Description')?.value!;
        return elsee;
      default:
        return null;
    }
  }
  returnfamilyobject(): import('../about-you/AboutYouClass/about-you-class').Family {
    let family = new Family();
    family.type = this.AboutYouForm.get('EmployerType')?.value!;
    family.familyType = this.AboutYouForm.get('Family.FamilyType')?.value!;
    family.havePets = this.AboutYouForm.get('Family.HavePets')?.value!;
    family.nationality = this.AboutYouForm.get('Family.Nationality')?.value!;
    return family;
  }
  JobDetailsForm = new FormGroup({
    ImgUrl: new FormControl(''),
    JobTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
    JobDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(25),
    ]),
    ReceivePrivilegedAndDiscountOffers: new FormControl(false),
    SubscribeToOurTipsAndNewsletters: new FormControl(false),
  });
  ReturnJobDetailsObject(): JobDetailsClass {
    const jobdetails = new JobDetailsClass();
    jobdetails.ImgUrl = this.JobDetailsForm.get('ImgUrl')?.value!;
    jobdetails.jobTitle = this.JobDetailsForm.get('JobTitle')?.value!;
    jobdetails.jobDescription =
      this.JobDetailsForm.get('JobDescription')?.value!;
    jobdetails.receivePrivilegedAndDiscountOffers = this.JobDetailsForm.get(
      'ReceivePrivilegedAndDiscountOffers'
    )?.value!;
    jobdetails.subscribeToOurTipsAndNewsletters = this.JobDetailsForm.get(
      'SubscribeToOurTipsAndNewsletters'
    )?.value!;
    return jobdetails;
  }
  AddJob(AddedJob:JobClass):Observable<any>{
    return this.HTTP.post(`${environment.baseUrl}/Job/Insert`,AddedJob)
  }
  constructor(private HTTP:HttpClient) {}
}
