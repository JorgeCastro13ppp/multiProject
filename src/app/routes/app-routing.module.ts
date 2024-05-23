import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../templates/home/home.component';
import { CalculatorComponent } from '../core/components/calculator/calculator.component';
import { CountriesComponent } from '../core/components/countries/countries.component';
import { GeoMunicipalitiesComponent } from '../core/components/geo-municipalities/geo-municipalities.component';
import { WeatherAemetComponent } from '../core/components/weather-aemet/weather-aemet.component';
import { ErrorPageComponent } from '../common/pages/error-page/error-page.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { RegisterComponent } from '../auth/pages/register/register.component';
import { WeatherMapComponent } from '../core/components/weather-map/weather-map.component';


const routes: Routes = [
  { path:'', redirectTo:'home',pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'weather-aemet', component: WeatherAemetComponent },
  { path:'countries',component:CountriesComponent },
  { path:'geoMunicipalities',component:GeoMunicipalitiesComponent },
  { path:'weather-map',component:WeatherMapComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
