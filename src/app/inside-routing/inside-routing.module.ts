
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingRoutingModule } from './inside-routing-routing.module';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    InsideRoutingRoutingModule,
    SharedModule

  ]
})
export class InsideRoutingModule { }
