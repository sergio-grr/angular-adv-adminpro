import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/dashboard/pages.module';



import { AppComponent } from './app.component';


import { Error404Component } from './pages/error404/error404.component';



@NgModule({
  declarations: [
    AppComponent,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
