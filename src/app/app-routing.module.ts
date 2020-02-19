import { WelcomeComponent } from './inside-routing/welcome/welcome.component';
import { ShellComponent } from './inside-routing/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
          path: 'welcome',
          component: WelcomeComponent
      },
      {
        path: 'characteres',
        loadChildren: './characteres/characteres.module#CharacteresModule'
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
