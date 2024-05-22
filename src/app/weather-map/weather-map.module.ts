import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './components/map/map.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { ResultsComponent } from './components/results/results.component';

import { SearchMapComponent } from './components/search-map/search-map.component';


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
