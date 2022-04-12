import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { NewsComponent } from './news/news.component';
import { AdminModule } from './modules/admin/admin.module';
import { LoginComponent } from './modules/admin/login/login.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LoginComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() { 
    const webComponent = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('elemento-a', webComponent);
  }
}



