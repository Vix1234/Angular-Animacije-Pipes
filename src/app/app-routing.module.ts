import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimacijeComponent } from './animacije/animacije.component';
import { PipePrimjerComponent } from './pipe-primjer/pipe-primjer.component';
import { VjezbaAnimacijaComponent } from './vjezba-animacija/vjezba-animacija.component';
import { VjezbanjeComponent } from './vjezbanje/vjezbanje.component';

const routes: Routes = [
  {path:'', component: AnimacijeComponent, data: {animation: 'Animacije'}},
  {path:'pipes', component: PipePrimjerComponent,  data: {animation: 'Pipes'}},
  {path:'vjezbanje', component: VjezbanjeComponent, data: {animation: 'Vjezbanje'}},
  {path:'vjezbaAnimacija', component: VjezbaAnimacijaComponent, data: {animation: 'vjezbanjeAnimacija'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
