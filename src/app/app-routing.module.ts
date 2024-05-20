import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CountriesComponent } from './countries/countries.component';
import { GeoMunicipalitiesComponent } from './geo-municipalities/geo-municipalities.component';
import { WeatherAemetComponent } from './weather-aemet/weather-aemet.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { WeatherMapComponent } from './weather-map/weather-map.component';

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
