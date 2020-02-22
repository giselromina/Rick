import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

      {
       path: '', redirectTo: 'login', pathMatch: 'full'
      },
         {
        path: 'login',
        loadChildren: './loggin/loggin.module#LogginModule',

      },

      {
      path: '',
      loadChildren: './inside-routing/inside-routing.module#InsideRoutingModule'
      },

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
