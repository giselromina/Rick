
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogginRoutingModule } from './loggin-routing.module';
import { UserLogComponent } from './user-log/user-log.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [UserLogComponent, LoginTemplateComponent],
  imports: [
    CommonModule,
    LogginRoutingModule,
    AuthServiceService
  ]
})
export class LogginModule { }
