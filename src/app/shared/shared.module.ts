import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { SpinnerModalComponent } from './components/spinner-modal/spinner-modal.component';
import { SpinnerMaterialComponent } from './components/spinner-material/spinner-material.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerModalComponent,
    SpinnerMaterialComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SpinnerComponent,
    SpinnerModalComponent,
    SpinnerMaterialComponent,
    MatProgressSpinnerModule
  ],
  providers: [
    SpinnerService
  ]
})
export class SharedModule { }
