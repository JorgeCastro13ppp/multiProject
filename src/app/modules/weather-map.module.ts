import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MapComponent } from '../core/components/weather-map/components/map/map.component';
import { GraphicsComponent } from '../core/components/weather-map/components/graphics/graphics.component';
import { ResultsComponent } from '../core/components/weather-map/components/results/results.component';

import { SearchMapComponent } from '../core/components/weather-map/components/search-map/search-map.component';


@NgModule({
  declarations: [
    MapComponent,
    GraphicsComponent,
    ResultsComponent,
    SearchMapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports: [
    MapComponent,
    GraphicsComponent,
    ResultsComponent,
    SearchMapComponent
  ]
})
export class WeatherMapModule { }
