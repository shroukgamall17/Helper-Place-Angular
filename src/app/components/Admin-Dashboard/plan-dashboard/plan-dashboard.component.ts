import { Component } from '@angular/core';
import { PlanService } from '../../../services/plan.service';
import { IPlan } from '../../../models/IPlan';
import { CommonModule } from '@angular/common';
import { PlanDetailsComponent } from './plan-details/plan-details/plan-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-dashboard',
  standalone: true,
  templateUrl: './plan-dashboard.component.html',
  styleUrl: './plan-dashboard.component.css',
  imports: [CommonModule, PlanDetailsComponent],
})
export class PlanDashboardComponent {
  public planslst!: IPlan[];
  private currentPlanId!: number | undefined;
  private currentPlan!: IPlan;

  constructor(private planService: PlanService, private router: Router) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    this.planService.getAllPlans().subscribe((plans) => {
      this.planslst = plans;
      console.log(plans);
    });
  }
  goToDetailsPage(cId: number): void {
    this.currentPlanId = cId;
    console.log(cId);
    this.planService.getPlanById(cId).subscribe((plan) => {
      this.currentPlan = plan;
    });

    this.router.navigate(['dashboard/planDetails', cId]);
  }
  ngOnChanges(): void {}

  handleDelete(cId: number): void {
    this.currentPlanId = cId;
    this.openModal();
  }

  goToEditPage(cId: number): void {
    this.currentPlanId = cId;
    this.planService.getPlanById(cId).subscribe((plan) => {
      this.currentPlan = plan;
    });
    this.router.navigate(['dashboard/planEdit', cId]);
  }
  goToAddPage(): void {
    this.router.navigate(['dashboard/planAdd']);
  }
  confirmDelete(): void {
    if (this.currentPlanId !== undefined) {
      this.planService.deletePlanById(this.currentPlanId).subscribe((res) => { 
        console.log(res);
        this.currentPlanId = undefined;
        this.loadPlans(); // Refresh the plans list
      });
      this.closeModal();
    }
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
