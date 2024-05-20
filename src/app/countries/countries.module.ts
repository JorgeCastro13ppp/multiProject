import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagsComponent } from './components/flags/flags.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FlagsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FlagsComponent,
  ]
})
export class CountriesModule { }
