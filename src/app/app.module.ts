import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimacijeComponent } from './animacije/animacije.component';
import { PipePrimjerComponent } from './pipe-primjer/pipe-primjer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SkracivanjePipe } from './customPipes/skracivanje.pipe';
import { FilterPipe } from './customPipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { VjezbanjeComponent } from './vjezbanje/vjezbanje.component';
import { KorisnikComponent } from './vjezbanje/korisnik/korisnik.component';
import { FilterObjPipe } from './customPipes/filter-obj.pipe';
import { VjezbaAnimacijaComponent } from './vjezba-animacija/vjezba-animacija.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimacijeComponent,
    PipePrimjerComponent,
    SkracivanjePipe,
    FilterPipe,
    VjezbanjeComponent,
    KorisnikComponent,
    FilterObjPipe,
    VjezbaAnimacijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
