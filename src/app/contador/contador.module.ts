import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/ContadorComponent';


@NgModule({
    declarations: [
        ContadorComponent
    ] ,
    exports: [
       ContadorComponent
    ],
 })

export class OKasModule{}