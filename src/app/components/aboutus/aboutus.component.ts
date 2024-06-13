import { Component } from '@angular/core';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { AboutComponent } from '../about/about.component';
import { AboutSideBarComponent } from '../about-side-bar/about-side-bar.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { FAQAboutComponent } from '../faq-about/faq-about.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    PrivacyPolicyComponent,
    AboutComponent,
    AboutSideBarComponent,
    ContactusComponent,
    FAQAboutComponent,
    RouterModule,
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {}
