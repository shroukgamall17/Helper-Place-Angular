import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Loginservice } from '../login/LoginService/loginservice.service';
import { CommonModule } from '@angular/common';
import { fas, faArrowUp, faStar, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule,FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public role: string = '';
  constructor(public authservice: Loginservice, library: FaIconLibrary) {
        library.addIcons(faArrowUp, faStar, faCalendar, faMapMarkerAlt);
    
    this.authservice.LoggedUser.subscribe({
      next: () => {
        if (this.authservice.LoggedUser.value != null) {
          this.role =
            this.authservice.LoggedUser.value[
              'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ];
        } else {
          this.role = '';
        }
      },
      error: () => {},
    });
    // if(authservice.LoggedUser.value != null){
    //   this.role = authservice.LoggedUser.value![
    //     'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    //   ];
    // }
    // console.log(this.role)
  }
    scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
