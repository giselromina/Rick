
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogginRoutingModule } from './loggin-routing.module';
import { UserLogComponent } from './user-log/user-log.component';



@NgModule({
  declarations: [UserLogComponent],
  imports: [
    CommonModule,
    LogginRoutingModule
  ],
  exports: [
    LogginRoutingModule
  ]
})
export class LogginModule { }
