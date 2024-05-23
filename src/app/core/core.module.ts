import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesModule } from '../features/countries.module';
import { WeatherMapModule } from '../features/weather-map.module';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountriesComponent } from './components/countries/countries.component';
import { GeoMunicipalitiesComponent } from './components/geo-municipalities/geo-municipalities.component';
import { WeatherAemetComponent } from './components/weather-aemet/weather-aemet.component';
import { WeatherMapComponent } from './components/weather-map/weather-map.component';
import { PipesModule } from '../features/pipes/pipes.module';
import { SharedModule } from '../features/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from 'src/app/routes/core/core-routing.module';

@NgModule({
  declarations: [
    CalculatorComponent,
    NavbarComponent,
    CountriesComponent,
    WeatherAemetComponent,
    GeoMunicipalitiesComponent,
    WeatherMapComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
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
    CountriesComponent,
    WeatherAemetComponent,
    GeoMunicipalitiesComponent,
    WeatherMapComponent
  ]
})
export class CoreModule { }
