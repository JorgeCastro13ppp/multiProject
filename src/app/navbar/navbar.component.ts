import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { SpinnerService } from '../shared/services/spinner.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService: AuthService /*public spinnerNav: SpinnerService*/) { }

  ngOnInit(): void {
      // this.spinnerNav.showSpinner();
      // this.isLoggedIn = !!this.authService.isLoggedIn();
      this.isLoggedIn = this.authService.isLoggedIn();
      // this.spinnerNav.hideSpinner();
  }

  logoutNav(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }

}
