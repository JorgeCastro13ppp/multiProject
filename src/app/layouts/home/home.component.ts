import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  isLoggedInHome = false;
  private authSubscription!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn().subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedInHome = isLoggedIn;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

}
