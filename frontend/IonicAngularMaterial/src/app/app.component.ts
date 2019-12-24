import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  portfolio: string;

  constructor(private router: Router) {
  }

  initializeApp() {
  }

  OpenPage() {
    if (this.portfolio === 'sports') {
      this.router.navigateByUrl(`sports`);
    } else if (this.portfolio === 'events') {
      this.router.navigateByUrl(`events`);
    } else if (this.portfolio === 'other') {
    this.router.navigateByUrl(`other`);
    }
  }

}
