// employer-dashboard.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmployer } from '../../../models/IEmployer';
import { EmployerService } from '../../../services/employer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {
  EmployersList: IEmployer[] = [];
  currentEmpID: number = 0;
  selectedEmpID: number | null = null;

  constructor(private httpClient: HttpClient, private employerService: EmployerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmps();
  }

  getAllEmps(): void {
    this.employerService.getAllEmployers().subscribe((Response) => {
      this.EmployersList = Response;
      console.log(Response);
    });
  }

  handleDelete(id: number) {
    this.selectedEmpID = id;
    this.openModal();
  }

  confirmDelete() {
    if (this.selectedEmpID !== null) {
      this.employerService.deleteEmployer(this.selectedEmpID).subscribe((res) => {
        console.log(res);
        this.selectedEmpID = null;
        this.getAllEmps();
      });
      this.closeModal();
    }
  }

  goToEditPage(id: number) {
    this.currentEmpID = id;
    this.router.navigate(['dashboard/employerEdit', this.currentEmpID]);
  }

  goToDetailsPage(id: number) {
    this.currentEmpID = id;
    this.router.navigate(['dashboard/employerDetails', this.currentEmpID]);
  }

  goToAddPage() {
    this.router.navigate(['dashboard/employerAdd']);
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
}
