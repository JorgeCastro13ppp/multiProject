import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperaturaActualPipe } from '../../shared/pipes/temp-actual.pipe';
import { HumedadActualPipe } from '../../shared/pipes/hum-actual.pipe';
import { PrecipitacionPipe } from '../../shared/pipes/precip-periodo.pipe';
import { TemperaturaPipe } from '../../shared/pipes/temp-period.pipe';
import { VientoPipe } from '../../shared/pipes/viento-period.pipe';
import { HumedadPipe } from '../../shared/pipes/hum-period.pipe';


@NgModule({
  declarations: [
    TemperaturaActualPipe,
    HumedadActualPipe,
    PrecipitacionPipe,
    TemperaturaPipe,
    VientoPipe,
    HumedadPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TemperaturaActualPipe,
    HumedadActualPipe,
    PrecipitacionPipe,
    TemperaturaPipe,
    VientoPipe,
    HumedadPipe
  ]
})
export class PipesModule { }
