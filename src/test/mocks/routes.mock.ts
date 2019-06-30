import { Routes } from '@angular/router';

import { DummySearchComponent } from '../components/dummy-search.component';
import { DummyLoginComponent } from '../components/dummy-login.component';
import { AppComponent } from '../../app/app.component';

export const testingRoutes: Routes = [
  { path: '', component: AppComponent, data: { title: 'Home'} },
  { path: 'search', component: DummySearchComponent, data: { title: 'Search'} },
  { path: 'log-in', component: DummyLoginComponent, data: { title: 'Login'}  }
];
