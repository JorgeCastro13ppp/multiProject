import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './calculator/components/display/display.component';
import { EqualButtonComponent } from './calculator/components/equal-button/equal-button.component';
import { WeatherModule } from './weather/weather.module';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './calculator/components/history/history.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';
import { CountriesModule } from './countries/countries.module';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CalculatorComponent,
    NavbarComponent,
    DisplayComponent,
    EqualButtonComponent,
    HomeComponent,
    HistoryComponent,
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
