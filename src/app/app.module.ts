import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/ContadorComponent';
import { HeroesModule } from './Heroes/heroe.module';
import { OKasModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    OKasModule
  ],
  providers: [],
  bootstrap: [AppComponent, ContadorComponent]
})
export class AppModule { }
