import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { WeatherModule } from './weather/weather.module';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesModule } from './countries/countries.module';
import { DisplayComponent } from './calculator/components/display/display.component';
import { EqualButtonComponent } from './calculator/components/equal-button/equal-button.component';
import { HistoryComponent } from './calculator/components/history/history.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CalculatorComponent,
    DisplayComponent,
    EqualButtonComponent,
    HistoryComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    CountriesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
