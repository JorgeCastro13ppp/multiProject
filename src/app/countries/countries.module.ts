import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagsComponent } from './components/flags/flags.component';



@NgModule({
  declarations: [
    FlagsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlagsComponent,
  ]
})
export class CountriesModule { }
