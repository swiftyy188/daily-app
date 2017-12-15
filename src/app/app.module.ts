import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { CallbackComponent } from './callback.component';

const appRoutes: Routes = [

  {
    path: 'deals',
    component: DealsComponent
  },
  {
    path: '',
    redirectTo: 'deals',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } //debugging purpose only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
