import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWeatherComponent } from './components/card-weather/card-weather.component';
import { InputWeatherComponent } from './components/input-weather/input-weather.component';




@NgModule({
  declarations: [
   CardWeatherComponent,
   InputWeatherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardWeatherComponent,
    InputWeatherComponent
  ]
})
export class WeatherModule { }
