import { JobRequirmentsClass } from "../job-requirment/JobRequirmentsClass/job-requirments-class";
import { AboutYouClass } from "../about-you/AboutYouClass/about-you-class";
import { JobDetailsClass } from "../job-details/JobDetailsClass/job-details-class";
export class JobClass {
  employerId:number|null=null
  jobRequirments: JobRequirmentsClass=new JobRequirmentsClass();
  aboutYou: AboutYouClass = new AboutYouClass();
  jobDetails: JobDetailsClass = new JobDetailsClass();
}
