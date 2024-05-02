import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './components/location/location.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    MapComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class WeatherModule { }
