import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../routes/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from '../routes/auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';

import { AppComponent } from '../app.component';
import { ErrorPageComponent } from '../layouts/error/error-page.component';
import { HomeComponent } from '../layouts/home/home.component';

// Para poner la fecha en español
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CoreModule } from '../core/core.module';



registerLocaleData(localeEs,'es');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    AuthRoutingModule,
    CoreModule,
    CommonModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    PipesModule,
    FormsModule,
  ],
  providers: [
    // Para poner la fecha en español
    {provide:LOCALE_ID,useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
