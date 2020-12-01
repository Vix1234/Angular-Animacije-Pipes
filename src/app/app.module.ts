import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimacijeComponent } from './animacije/animacije.component';
import { PipePrimjerComponent } from './pipe-primjer/pipe-primjer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimacijeComponent,
    PipePrimjerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
