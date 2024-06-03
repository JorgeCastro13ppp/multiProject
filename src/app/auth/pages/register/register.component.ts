import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../shared/interfaces';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userR:User = {
    email:'',
    username:'',
    password:''
  };

  registerForm!:NgForm;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let registered = this.authService.register(this.userR);
    if (registered) {
      this.router.navigate(['/auth/login']);
    alert('Usuario registrado con éxito');
  } else {
    alert('Error al registrar usuario');
  }
  }



}
