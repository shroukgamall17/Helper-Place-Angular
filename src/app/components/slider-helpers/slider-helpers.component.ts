import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {  faStar, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-slider-helpers',
  standalone: true,
  imports: [ FontAwesomeModule],
  templateUrl: './slider-helpers.component.html',
  styleUrl: './slider-helpers.component.css'
})
export class SliderHelpersComponent {
constructor(library: FaIconLibrary) {
    library.addIcons(faStar, faCalendar, faMapMarkerAlt);
  }
}
