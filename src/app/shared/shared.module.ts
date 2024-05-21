import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { SpinnerModalComponent } from './components/spinner-modal/spinner-modal.component';
import { SpinnerBootstrapComponent } from './components/spinner-bootstrap/spinner-bootstrap.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerModalComponent,
    SpinnerBootstrapComponent,

  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SpinnerComponent,
    SpinnerModalComponent,
    SpinnerBootstrapComponent,
    MatProgressSpinnerModule
  ],
  providers: [
    SpinnerService
  ]
})
export class SharedModule { }
