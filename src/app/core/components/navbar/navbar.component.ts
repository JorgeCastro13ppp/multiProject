import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { SpinnerService } from '../../../utils/services/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {

  isLoggedIn = false;
  private authSubscription!:Subscription;

  constructor(private authService: AuthService /*public spinnerNav: SpinnerService*/) { }
  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
      // this.spinnerNav.showSpinner();
      // this.isLoggedIn = !!this.authService.isLoggedIn();
      // this.isLoggedIn = this.authService.isLoggedIn(); importante
      // this.spinnerNav.hideSpinner();
      this.authSubscription = this.authService.isLoggedIn().subscribe(
        (isLoggedIn: boolean) => {
          this.isLoggedIn = isLoggedIn;
        }
      );
  }

  logoutNav(): void {
    this.authService.logout();
  }

}
