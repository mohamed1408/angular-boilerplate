import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
        <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
      </ul>
    </nav>
  `
})
export class NavComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(
      user => this.isLoggedIn = !!user
    );
  }

  logout() {
    this.authService.logout();
  }
}