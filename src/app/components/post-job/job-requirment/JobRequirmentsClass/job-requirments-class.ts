class BasicInformation {
  positionOffered: string='';
  type: string='';
  location: string='';
  startDate: Date=new Date();
}

class RequiredSkillsAndDuties {
  languageSkills: string[] =[];
  mainSkills: string[] =[];
  cookingSkills: string[] =[];
  otherSkills: string[] =[];
  mostImportantSkills: string[] =[];
}

class CandidatePreference {
  preferedCandidateLocation: string='';
  preferedCandidateContract: string='';
  gender: string='';
  nationality: string[] =[];
  education: string='';
  religion: string[] =[];
  ageRequired: number[] =[];
  experienceYearsRequired: number[] =[];
}
export class JobRequirmentsClass {
  basicInformation: BasicInformation= new BasicInformation();
  requiredSkillsAndDuties: RequiredSkillsAndDuties= new RequiredSkillsAndDuties();
  candidatePreference: CandidatePreference= new CandidatePreference();
}
