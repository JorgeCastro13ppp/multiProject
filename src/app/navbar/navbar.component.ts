import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      // this.isLoggedIn = !!this.authService.isLoggedIn();
      this.isLoggedIn = this.authService.isLoggedIn();
  }

  logoutNav(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }

}
