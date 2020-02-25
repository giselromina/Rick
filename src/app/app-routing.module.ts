import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'login ',
    loadChildren: './loggin/loggin.module#LogginModule'
  },
  {
    path: '',
    loadChildren: './inside-routing/inside-routing.module#InsideRoutingModule',
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
