import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {  faStar, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-available-job-slider',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './available-job-slider.component.html',
  styleUrl: './available-job-slider.component.css'
})
export class AvailableJobSliderComponent {
constructor(library: FaIconLibrary) {
    library.addIcons(faStar, faCalendar, faMapMarkerAlt);
  }
}
