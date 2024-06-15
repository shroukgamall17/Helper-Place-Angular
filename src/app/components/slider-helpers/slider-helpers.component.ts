import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {  faStar, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { ICandidate } from '../../models/ICandidate';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FcandidateService } from '../../services/fcandidate.service';
import { IFiltercandidate } from '../../models/ifiltercandidate';
import { CandidateService } from '../../services/candidate.service';
@Component({
  selector: 'app-slider-helpers',
  standalone: true,
  imports: [ FontAwesomeModule,FormsModule,CommonModule],
  templateUrl: './slider-helpers.component.html',
  styleUrl: './slider-helpers.component.css'
})
export class SliderHelpersComponent implements OnInit{
  candidates: ICandidate[] = [];
  chunkedCandidates: ICandidate[][] = [];
  filter:IFiltercandidate = {} as IFiltercandidate

  constructor(library: FaIconLibrary, private candidateService: CandidateService) {
    library.addIcons(faStar, faCalendar, faMapMarkerAlt);
  }
  ngOnInit(): void {
    this.getAllCandidates();
    this.chunkedCandidates = this.chunkArray(this.candidates, 3);
  }

  getAllCandidates() {
    this.candidateService.getAllCandidates().subscribe({
      next: (res) => {
        this.candidates = res;
        this.chunkedCandidates = this.chunkArray(this.candidates, 3);
        console.log(this.candidates)
      },
      error: (err) => console.log(err)
    });
  }

  chunkArray(array: ICandidate[], chunkSize: number): ICandidate[][] {
    const chunks: ICandidate[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
