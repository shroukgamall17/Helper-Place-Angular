import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-community-section',
  standalone: true,
  imports: [],
  templateUrl: './our-community-section.component.html',
  styleUrl: './our-community-section.component.css'
})
export class OurCommunitySectionComponent {
  constructor(private router:Router) {
  
  }
  Helpers() {
    this.router.navigate(["/job"])
  }
  Candidates() {
    this.router.navigate(["/candidatepage"])
  }
}
