import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './about-side-bar.component.html',
  styleUrl: './about-side-bar.component.css',
})
export class AboutSideBarComponent {
  constructor(private router: Router) {}
  handleGoTo(link: string): void {
    this.router.navigate([link], {
      relativeTo: this.router.routerState.root.firstChild,
    });
  }
}
