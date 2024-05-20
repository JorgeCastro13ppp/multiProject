import { NgModule } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
    imports: [
        MatTableModule,
        MatSlideToggleModule
    ],
    exports: [
        MatTableModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule {

}
