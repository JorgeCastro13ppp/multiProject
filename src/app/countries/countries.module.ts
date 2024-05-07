import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagsComponent } from './components/flags/flags.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    FlagsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlagsComponent,
    ModalComponent
  ]
})
export class CountriesModule { }
