import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from '../../core/components/calculator/calculator.component';
import { WeatherAemetComponent } from '../../core/components/weather-aemet/weather-aemet.component';
import { CountriesComponent } from '../../core/components/countries/countries.component';
import { GeoMunicipalitiesComponent } from '../../core/components/geo-municipalities/geo-municipalities.component';
import { WeatherMapComponent } from '../../core/components/weather-map/weather-map.component';

const routes: Routes = [
  { path:'',children:[
      { path: 'calculator', component: CalculatorComponent },
      { path: 'weather-aemet', component: WeatherAemetComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'geoMunicipalities', component: GeoMunicipalitiesComponent },
      { path: 'weather-map', component: WeatherMapComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
