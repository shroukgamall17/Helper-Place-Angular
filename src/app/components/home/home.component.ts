import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';
import { HomeFeaturesComponent } from '../home-features/home-features.component';
import { HomePlacesComponent } from '../home-places/home-places.component';
import { Loginservice } from '../login/LoginService/loginservice.service';
import {OurCommunitySectionComponent} from '../our-community-section/our-community-section.component'
import {MoreConnectionsHomeSectionComponent} from'../more-connections-home-section/more-connections-home-section.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    NgbCarouselModule,
    HomeCarouselComponent,
    HomeFeaturesComponent,
    OurCommunitySectionComponent,
    HomePlacesComponent,
    MoreConnectionsHomeSectionComponent
  ],
})
export class HomeComponent {
  constructor(public authservice: Loginservice, private router:Router) { }
  Helpers() {
    this.router.navigate(["/job"])
  }
  Candidates() {
    this.router.navigate(["/candidatepage"])
   }
}
