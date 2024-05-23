import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../utils/ui/spinner/spinner.component';
import { SpinnerService } from '../../utils/services/spinner.service';
import { SpinnerModalComponent } from '../../utils/ui/spinner-modal/spinner-modal.component';
import { SpinnerBootstrapComponent } from '../../utils/ui/spinner-bootstrap/spinner-bootstrap.component';





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