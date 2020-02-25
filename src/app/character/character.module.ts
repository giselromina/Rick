import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
