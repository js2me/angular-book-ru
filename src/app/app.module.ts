import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutes} from './app.routes';
import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {WhatIsThatComponent} from './components/what-is-that/what-is-that.component';
import {RepositoriesComponent} from './components/repositories/repositories.component';
import {ServiceInfoComponent} from './components/service-info/service-info.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AuthService} from './services/auth/auth-service.service';
import {GithubAuthInterceptor} from './interceptors/GithubAuthInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhotoViewerComponent } from './components/photo-viewer/photo-viewer.component';
import {PhotoViewerService} from './services/photo-viewer/photo-viewer.service';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {RepoService} from './services/repo/repo-service.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    WhatIsThatComponent,
    RepositoriesComponent,
    ServiceInfoComponent,
    PageNotFoundComponent,
    PhotoViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [
    AuthService,
    RepoService,
    AuthGuardService,
    PhotoViewerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
