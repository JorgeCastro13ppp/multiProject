import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User, UserLogin } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userL:UserLogin = {
    username:'',
    password:''
  };

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
