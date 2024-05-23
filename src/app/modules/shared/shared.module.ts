import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../shared/ui/spinner/spinner.component';
import { SpinnerService } from '../../shared/services/spinner.service';
import { SpinnerModalComponent } from '../../shared/ui/spinner-modal/spinner-modal.component';
import { SpinnerBootstrapComponent } from '../../shared/ui/spinner-bootstrap/spinner-bootstrap.component';





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
