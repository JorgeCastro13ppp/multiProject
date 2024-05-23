import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '../../routes/auth/auth-routing.module';
import { LoginComponent } from '../../auth/pages/login/login.component';
import { RegisterComponent } from '../../auth/pages/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
