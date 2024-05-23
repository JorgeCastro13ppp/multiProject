import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperaturaActualPipe } from '../../common/pipes/temp-actual.pipe';
import { HumedadActualPipe } from '../../common/pipes/hum-actual.pipe';
import { PrecipitacionPipe } from '../../common/pipes/precip-periodo.pipe';
import { TemperaturaPipe } from '../../common/pipes/temp-period.pipe';
import { VientoPipe } from '../../common/pipes/viento-period.pipe';
import { HumedadPipe } from '../../common/pipes/hum-period.pipe';


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
