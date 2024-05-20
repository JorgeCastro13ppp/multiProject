import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { SpinnerModalComponent } from './components/spinner-modal/spinner-modal.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    SpinnerModalComponent
  ],
  providers: [
    SpinnerService
  ]
})
export class SharedModule { }
