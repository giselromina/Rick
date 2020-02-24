import { HomeModule } from './../home/home.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogginRoutingModule } from './loggin-routing.module';
import { UserLogComponent } from './user-log/user-log.component';

import { CharacteresModule } from '../home/characters/characteres.module';


@NgModule({
  declarations: [UserLogComponent],
  imports: [
    CommonModule,
    LogginRoutingModule,
    CharacteresModule,
    HomeModule
  ],
  exports: [
  ]
})
export class LogginModule { }
