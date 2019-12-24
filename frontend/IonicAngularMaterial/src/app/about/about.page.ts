import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  portfolio: string;

  constructor(private router: Router) { }

  ngOnInit() {
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
