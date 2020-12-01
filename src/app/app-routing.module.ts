import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimacijeComponent } from './animacije/animacije.component';
import { PipePrimjerComponent } from './pipe-primjer/pipe-primjer.component';

const routes: Routes = [
  {path:'', component: AnimacijeComponent},
  {path:'pipes', component: PipePrimjerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
