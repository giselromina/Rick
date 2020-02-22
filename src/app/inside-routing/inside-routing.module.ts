
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingRoutingModule } from './inside-routing-routing.module';
import { MenuComponent } from './menu/menu.component';

import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [MenuComponent,

  SideBarComponent,
],

  imports: [
    CommonModule,
    InsideRoutingRoutingModule,

  ],
  exports: [
  MenuComponent,
  SideBarComponent

  ]
})
export class InsideRoutingModule { }
