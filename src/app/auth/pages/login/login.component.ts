import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserLogin } from '../../../shared/interfaces';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userL:UserLogin = {
    email:'',
    password:''
  };

  loginForm: NgForm|null=null;

 loginCheck: any;


  constructor(private authService: AuthService,private router:Router, private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.loginCheck);
  }

  onLogin(): void {
    if (this.authService.login(this.userL)) {
      this.loginCheck = true;
      this.cdr.detectChanges();
      this.showAlert('successAlert');

      // Navegar después de 5 segundos
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    } else {
      this.loginCheck = false;
      this.cdr.detectChanges();
      this.showAlert('failedAlert');
    }
  }

  showAlert(alertId: string): void {
    const alertElement = document.getElementById(alertId);
    if (alertElement) {
      alertElement.classList.remove('d-none');
      alertElement.classList.add('d-block');
      // Ocultar el alert después de 5 segundos
      setTimeout(() => {
        alertElement.classList.remove('d-block');
        alertElement.classList.add('d-none');
      }, 3000);
    }
  }

}
