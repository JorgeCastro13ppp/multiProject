import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './calculator/components/display/display.component';
import { ActionButtonComponent } from './calculator/components/action-button/action-button.component';
import { NumberButtonComponent } from './calculator/components/number-button/number-button.component';
import { EqualButtonComponent } from './calculator/components/equal-button/equal-button.component';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CalculatorComponent,
    NavbarComponent,
    DisplayComponent,
    ActionButtonComponent,
    NumberButtonComponent,
    EqualButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
