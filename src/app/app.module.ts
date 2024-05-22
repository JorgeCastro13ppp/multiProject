import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesModule } from './countries/countries.module';
import { GeoMunicipalitiesComponent } from './geo-municipalities/geo-municipalities.component';
import { FormsModule } from '@angular/forms';
import { WeatherAemetComponent } from './weather-aemet/weather-aemet.component';

// Para poner la fecha en español
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TemperaturaActualPipe } from './weather-aemet/pipes/temp-actual.pipe';
import { HumedadActualPipe } from './weather-aemet/pipes/hum-actual.pipe';
import { PrecipitacionPipe } from './weather-aemet/pipes/precip-periodo.pipe';
import { TemperaturaPipe } from './weather-aemet/pipes/temp-period.pipe';
import { VientoPipe } from './weather-aemet/pipes/viento-period.pipe';
import { HumedadPipe } from './weather-aemet/pipes/hum-period.pipe';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { SharedModule } from './shared/shared.module';
import { WeatherMapModule } from './weather-map/weather-map.module';
import { WeatherMapComponent } from './weather-map/weather-map.component';


registerLocaleData(localeEs,'es');


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    WeatherAemetComponent,
    GeoMunicipalitiesComponent,
    TemperaturaActualPipe,
    HumedadActualPipe,
    PrecipitacionPipe,
    TemperaturaPipe,
    VientoPipe,
    HumedadPipe,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    WeatherMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthRoutingModule,
    CommonModule,
    CountriesModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    SharedModule,
    WeatherMapModule
  ],
  providers: [
    // Para poner la fecha en español
    {provide:LOCALE_ID,useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
