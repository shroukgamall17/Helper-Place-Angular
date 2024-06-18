import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ICandidates } from '../../../models/icandidates';
import { FcandidateService } from '../../../services/fcandidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.css',
})
export class CandidateDashboardComponent implements OnInit {
  candidateId!: number | null;
  allcandidates!: ICandidates[];
  constructor(
    private candidatesservice: FcandidateService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.candidatesservice.getAllCandidates().subscribe({
      next: (data: ICandidates[]) => {
        this.allcandidates = data;
        console.log(this.allcandidates);
      },
      error: (error) => {
        console.error('Error fetching candidates:', error);
      },
      complete: () => {
        console.log('Candidates fetched successfully');
      },
    });
  }
  navigateToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
  // navigateTodelete(id: number) {
  //   this.router.navigate(['/delete', id]);
  // }
  navigateToEdit(id: number) {
    this.router.navigate(['/candidateResume/Updatelayer', id]);
  }
  openModal() {
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
  closeModal() {
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  handleDelete(id: number) {
    this.candidateId = id;
    this.openModal();
  }
  confirmDelete() {
    if (this.candidateId !== null) {
      this.candidatesservice.deleteCandidate(this.candidateId).subscribe((res) => {
        this.candidateId = null;
        this.candidatesservice.getAllCandidates()
      });
      this.closeModal();
    }
  }

}
