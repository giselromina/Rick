
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingRoutingModule } from './inside-routing-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ShellComponent } from './shell/shell.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [MenuComponent,
  ShellComponent,
  SideBarComponent,
  WelcomeComponent],
  imports: [
    CommonModule,
    InsideRoutingRoutingModule
  ],
  exports: [
  MenuComponent,
  ShellComponent,
  SideBarComponent,
  WelcomeComponent
  ]
})
export class InsideRoutingModule { }
