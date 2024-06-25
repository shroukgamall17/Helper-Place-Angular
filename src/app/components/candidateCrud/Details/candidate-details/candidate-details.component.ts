import { Component, OnInit } from '@angular/core';
import { FcandidateService } from '../../../../services/fcandidate.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ICandidates } from '../../../../models/icandidates';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';
import { Loginservice } from '../../../login/LoginService/loginservice.service';
import { PaymentService } from '../../../../services/payment.service';
import { SubModel } from '../../../../models/sub-model';
import { ICandidate } from '../../../../models/ICandidate';
import { CandidateService } from '../../../../services/candidate.service';
import { DateFormatWihtoutStringPipe } from '../../../../pipes/date-format-wihtout-string.pipe';
import { DateFormatPipe } from "../../../../pipes/date-format.pipe";

@Component({
    selector: 'app-candidate-details',
    standalone: true,
    templateUrl: './candidate-details.component.html',
    styleUrl: './candidate-details.component.css',
    imports: [RouterOutlet, RouterLink, CommonModule, FormsModule, DateFormatWihtoutStringPipe, DateFormatPipe]
})
export class CandidateDetailsComponent implements OnInit {
  candidateId!: number;
  mycandidate: ICandidates = {} as ICandidates;
  IsLogged: boolean = false;
  Role: string = '';
  url: string = environment.baseUrl;
  activeSubscriber!: SubModel;
  candidates: ICandidate[] = [];
  randomCandidates: any[] = [];
  env: string = environment.baseUrl;

  constructor(
    private candidatesservice: FcandidateService,
    private route: ActivatedRoute,
    public loginService: Loginservice,
    private router: Router,
    private paymentServ: PaymentService,
    private location: Location,
    private candidateService: CandidateService,
  ) {
    this.loginService.LoggedUser.subscribe({
      next: () => {
        if (this.loginService.LoggedUser.value != null) {
          this.Role =
            this.loginService.LoggedUser.value[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ];
          this.IsLogged = true;
        } else {
          this.IsLogged = false;
          this.Role = '';
        }
      },
      error: () => { },
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.candidateId = params['id'];
      this.fetchCandidateDetails();
    });
    this.getAllCandidates();
  }

  fetchCandidateDetails() {
    this.candidatesservice.getCandidateById(this.candidateId).subscribe({
      next: (data: ICandidates) => {
        this.mycandidate = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching candidate:', error);
      },
      complete: () => {
        console.log('Candidate fetched successfully');
      },
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
    return ref ? 'I have a reference letter' : "I don't have a reference letter";
  }

  handleContact(id: number) {
    if (this.loginService.IsLogged) {
      this.paymentServ.getSubscribe().subscribe({
        next: (data: SubModel) => {
          this.activeSubscriber = data;
          if (this.activeSubscriber.isActive) {
            this.router.navigate(['/contactDetails', id]);
          } else {
            this.router.navigateByUrl('/pricing');
          }
        },
        error: (error) => {
          console.error('Error fetching subscription:', error);
        },
        complete: () => {
          console.log('Subscription fetched successfully');
        },
      });
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  handleDate(date: any) {
    return new Date(date);
  }

  goBack(): void {
    this.location.back();
  }

  getAllCandidates() {
    this.candidateService.getAllCandidates().subscribe({
      next: (res) => {
        this.candidates = res;
        this.selectRandomCandidates();
      },
      error: (err) => console.log(err),
    });
  }

  selectRandomCandidates() {
    const usedIndexes = new Set<number>();

    while (this.randomCandidates.length < 4 && usedIndexes.size < this.candidates.length) {
      const randomIndex = Math.floor(Math.random() * this.candidates.length);
      if (!usedIndexes.has(randomIndex)) {
        usedIndexes.add(randomIndex);
        this.randomCandidates.push(this.candidates[randomIndex]);
      }
    }
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/details', id]).then(() => {
      this.candidateId = id;
      this.fetchCandidateDetails();
    });
  }
}
