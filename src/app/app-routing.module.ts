import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routerConfig } from './core/config/router-config.const';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: routerConfig.users.base,
    loadChildren: () => import('./pages/users/users.module').then(mod => mod.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
