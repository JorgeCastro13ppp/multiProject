import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {

  isLoggedIn = false;
  private authSubscription!:Subscription;

  constructor(private authService: AuthService, private cdrNav:ChangeDetectorRef ) { }
  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    if(!this.isLoggedIn){
      this.authService.checkCoreStatus();
    }

    this.authService.checkAuthStatus();

      this.authSubscription = this.authService.isLoggedIn().subscribe(
        (isLoggedIn: boolean) => {
          this.isLoggedIn = isLoggedIn;
        }
      );
  }

  logoutNav(): void {

    setTimeout(() => {
      this.authService.logout();
    }, 2000);

  }


}
