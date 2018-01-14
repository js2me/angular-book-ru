import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {AppRoutes} from './app.routes';
import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {WhereToBeginComponent} from './components/where-to-begin/where-to-begin.component';
import {ComponentInfoComponent} from './components/component-info/component-info.component';
import {ServiceInfoComponent} from './components/service-info/service-info.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AuthService} from './services/auth/auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    WhereToBeginComponent,
    ComponentInfoComponent,
    ServiceInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [
    HttpClient,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
