import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './inside-routing/menu/menu.component';
import { ShellComponent } from './inside-routing/shell/shell.component';
import { WelcomeComponent } from './inside-routing/welcome/welcome.component';
import { SideBarComponent } from './inside-routing/side-bar/side-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShellComponent,
    WelcomeComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
