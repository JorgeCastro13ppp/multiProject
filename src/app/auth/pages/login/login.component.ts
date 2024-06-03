import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.authService.login(this.userL)) {
      this.router.navigate(['/home']);
      alert('Inicio de sesión exitoso');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

}
