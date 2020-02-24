
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {CharacteresModule} from './characters/characteres.module';
import {UserProfileComponent} from './user-profile/user-profile.component';
@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharacteresModule
  ]
})
export class HomeModule { }
