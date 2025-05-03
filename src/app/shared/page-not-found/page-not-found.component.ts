import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: false,
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  async goBack() {
    await this.router.navigate(['/pets']);
  }
}
