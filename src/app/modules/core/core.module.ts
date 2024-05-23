import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesModule } from '../countries.module';
import { WeatherMapModule } from '../weather-map.module';

import { CalculatorComponent } from '../../core/components/calculator/calculator.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { HomeComponent } from '../../templates/home/home.component';
import { CountriesComponent } from '../../core/components/countries/countries.component';
import { GeoMunicipalitiesComponent } from '../../core/components/geo-municipalities/geo-municipalities.component';
import { WeatherAemetComponent } from '../../core/components/weather-aemet/weather-aemet.component';
import { WeatherMapComponent } from '../../core/components/weather-map/weather-map.component';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CalculatorComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    WeatherAemetComponent,
    GeoMunicipalitiesComponent,
    WeatherMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CountriesModule,
    WeatherMapModule,
    PipesModule,
    SharedModule
  ],
  exports: [
    CalculatorComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    WeatherAemetComponent,
    GeoMunicipalitiesComponent,
    WeatherMapComponent
  ]
})
export class CoreModule { }
