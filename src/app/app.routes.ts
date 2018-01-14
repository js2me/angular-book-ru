
import { RouterModule, Routes } from '@angular/router';
import { WhereToBeginComponent } from './components/where-to-begin/where-to-begin.component';
import { ComponentInfoComponent } from './components/component-info/component-info.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { environment } from '../environments/environment';

export const AppRoutes = RouterModule.forRoot([
  { path: 'where-to-begin', component: WhereToBeginComponent },
  { path: 'component', component: ComponentInfoComponent },
  { path: 'service', component: ServiceInfoComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/where-to-begin',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
],
  { enableTracing: !environment.production });
