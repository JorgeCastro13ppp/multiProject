import { NgModule } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatTableModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatTableModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule {

}
