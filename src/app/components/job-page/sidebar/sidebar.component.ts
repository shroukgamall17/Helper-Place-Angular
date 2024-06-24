import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; // Import NgMultiSelectDropDownModule
import { MultipleSearchSelectComponent } from '../../post-resume/Post-Resume-Spares/Inputs/multiple-search-select/multiple-search-select.component';
import { SideBarServiceService } from './SideBarService/side-bar-service.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    MultipleSearchSelectComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  SideBarServiceService: SideBarServiceService = new SideBarServiceService();
  queryParams: QueryParams = new QueryParams();
  @Output() ApplyChanges = new EventEmitter<QueryParams>();

  constructor(private modalService: NgbModal) {}

  // openModal(): void {
  //   const modal = document.getElementById('exampleModal');
  //   if (modal) {
  //     modal.classList.add('show');
  //     modal.style.display = 'block';
  //     modal.setAttribute('aria-hidden', 'false');
  //   }
  // }

  closeModal(): void {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  }
}

export class QueryParams {
  contractSelectedItems: string[] = [];
  languageSelectedItems: string[] = [];
  skillsSelectedItems: string[] = [];
  countrysSelectedItems: string[] = [];
  startdate: Date = new Date();
  gender: string = "Any";
  JobPosition: string = "Any";
  JobType: string = "Any";
  WorkingExperience: number = 0;
  Age: number = 18;
}
