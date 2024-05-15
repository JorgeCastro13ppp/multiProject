import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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

registerLocaleData(localeEs,'es');


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
    WeatherAemetComponent,
    GeoMunicipalitiesComponent,
    TemperaturaActualPipe,
    HumedadActualPipe,
    PrecipitacionPipe,
    TemperaturaPipe,
    VientoPipe,
    HumedadPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    WeatherModule,
    CountriesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // Para poner la fecha en español
    {provide:LOCALE_ID,useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
