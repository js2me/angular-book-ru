import {RouterModule, Routes} from '@angular/router';
import {WhatIsThatComponent} from './components/what-is-that/what-is-that.component';
import {RepositoriesComponent} from './components/repositories/repositories.component';
import {ServiceInfoComponent} from './components/service-info/service-info.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {environment} from '../environments/environment';
import {AuthGuardService as AuthGuard} from './services/auth/auth-guard.service';

export const AppRoutes = RouterModule.forRoot([
    {path: 'what-is-that', component: WhatIsThatComponent},
    {path: 'repositories', component: RepositoriesComponent, canActivate: [AuthGuard]},
    {path: 'service', component: ServiceInfoComponent, canActivate: [AuthGuard]},
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
    //   path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // },
    {
      path: '',
      redirectTo: '/what-is-that',
      pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent}
  ],
  {enableTracing: !environment.production});
