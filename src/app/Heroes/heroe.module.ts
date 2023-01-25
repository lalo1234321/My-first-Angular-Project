import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { HeroeComponent } from './Heroe/heroe.component';

@NgModule({
   declarations: [
        HeroeComponent,
        ListadoComponent
   ] ,
   exports: [
        ListadoComponent,
        HeroeComponent
   ],
   imports: [
    CommonModule
   ]
})


export class HeroesModule {}