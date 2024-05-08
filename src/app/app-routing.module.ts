import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CountriesComponent } from './countries/countries.component';
import { GeoMunicipalitiesComponent } from './geo-municipalities/geo-municipalities.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'weather', component: WeatherComponent },
  { path:'countries',component:CountriesComponent },
  {path:'geoMunicipalities',component:GeoMunicipalitiesComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
