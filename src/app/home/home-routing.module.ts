
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/characters',
    loadChildren: './characters/characteres.module#CharacteresModule'
  },
  {
    path: 'home/userProfile',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
