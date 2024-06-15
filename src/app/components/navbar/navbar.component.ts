import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Loginservice } from '../login/LoginService/loginservice.service';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../services/payment.service';
import { SubModel } from '../../models/sub-model';
import { Modal } from 'bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule , NgbModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  Role: string = '';
  IsLogged: boolean = false;
  activeSubscriber!: SubModel;
  userName!: string;
  constructor(
    public loginService: Loginservice,
    private paymentServ: PaymentService,
    private router: Router
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
      error: () => {},
    });
  }

  handleAddJob() {
    if (this.loginService.IsLogged) {
      this.paymentServ.getSubscribe().subscribe({
        next: (data: SubModel) => {
          this.activeSubscriber = data; // Assign the fetched candidates to the candidates array
          if (this.activeSubscriber.isActive) {
            this.router.navigate(['/AddJob']);
          } else {
            this.router.navigateByUrl('/pricing');
          }
        },
        error: (error) => {
          console.error('Error fetching candidates:', error); // Log any errors
        },
        complete: () => {
          console.log('Candidates fetched successfully'); // Log completion
        },
      });
    } else {
      this.router.navigateByUrl('/Login');
    }
  }
  // ngAfterViewInit() {
  //   const modalElement = document.getElementById('exampleModal');
  //   if (modalElement) {
  //     const modal = new Modal(modalElement);
  //     modal.show();
  //   }
  // }

  openModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  handleGoTo(link: string): void {
    this.router.navigate([link], {
      relativeTo: this.router.routerState.root.firstChild,
    });
  }
  ngOnInit(): void {
    this.loginService.LoggedUser.subscribe({
      next: () => {
        if (this.loginService.LoggedUser.value != null) {
          this.userName =
            this.loginService.LoggedUser.value[
              'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
            ];
        } else {
        }
      },
      error: () => {},
    });
  }
}
