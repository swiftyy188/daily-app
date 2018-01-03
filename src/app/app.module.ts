import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { CallbackComponent } from './callback.component';
import { DealService } from './deal.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard} from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

const appRoutes: Routes = [

  {
    path: 'deals',
    component: DealsComponent,
    // Add this to guard this route
    canActivate: [
    AuthGuard
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    CallbackComponent,
    HomeComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } //debugging purpose only
      )
  ],
  providers: [DealService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
