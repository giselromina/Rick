import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },

  {
    path: 'home/characters',
    component: MenuComponent,
loadChildren: '../character/character.module#CharacterModule'
  },
  {
    path: 'home/profile',
    loadChildren: '../profile/profile.module#ProfileModule'
  },
  {
    path: 'home',
    component: MenuComponent,

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsideRoutingRoutingModule { }
