import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdmin } from '../../../../models/IAdmin';
import { AccountService } from '../../../../services/account.service';
@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent {
  currentId!: number;
  currentAdmin!: IAdmin;
  constructor( private accountService: AccountService,private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentId = params['id'];
    });
    this.accountService.getAdmin(this.currentId).subscribe((res) => {
      this.currentAdmin = res;
    })
  }

  back(): void {
    this.router.navigate(['/dashboard/employerDashboard']);
  }
}
