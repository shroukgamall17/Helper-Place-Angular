class AboutYou {
  employerType: EmployerType = new  EmployerType();
  receiveByEmail: boolean = false;
  email: string = '';
}
class EmployerType{
  type:string='';
  familyType:string=''
  havePets:boolean=false
  nationality:string=''
}
export class Family extends EmployerType{
}
class OffersToCandidate {
  dayOFF: string = '';
  accomodation: string = '';
  monthlySalaryOffer: MonthlySalaryOffer = new MonthlySalaryOffer();
}
class MonthlySalaryOffer {
  title: string = 'Dont-Mention';
}
export class Fix extends MonthlySalaryOffer {
  constructor() {
    super();
    this.title = 'Fix';
  }
  monthlySalary: number = 0;
  currency: string = '';
}
export class Range extends MonthlySalaryOffer {
  constructor() {
    super();
    this.title = 'Range';
  }
  maxSalary: number = 0;
  minSalary: number = 0;
  currency: string = '';
}
export class Else extends MonthlySalaryOffer {
  constructor() {
    super();
    this.title = 'Else';
  }
  description: string = '';
}
export class AboutYouClass {
  aboutYouSub: AboutYou = new AboutYou();
  offersToCandidate: OffersToCandidate = new OffersToCandidate();
}
