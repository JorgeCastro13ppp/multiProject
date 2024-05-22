import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { SpinnerModalComponent } from './components/spinner-modal/spinner-modal.component';
import { SpinnerBootstrapComponent } from './components/spinner-bootstrap/spinner-bootstrap.component';





@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerModalComponent,
    SpinnerBootstrapComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerComponent,
    SpinnerModalComponent,
    SpinnerBootstrapComponent,
  ],
  providers: [
    SpinnerService
  ]
})
export class SharedModule { }
