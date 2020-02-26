import { SharedModule } from './shared/shared.module';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { NgModule, Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { GestureConfig } from '@angular/material';
import {LogginModule} from '../app/loggin/loggin.module';
import 'hammerjs';
import {CoreModule} from '../app/core/core.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { BlockUIModule } from 'ng-block-ui';

declare var Hammer: any;
@Injectable()
export class HammerConfig extends GestureConfig {
  buildHammer(element: HTMLElement) {
    return new GestureConfig({ touchAction: 'pan-y' }).buildHammer(element);
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    LogginModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    // BlockUIModule.forRoot()

  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
