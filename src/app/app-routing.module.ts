import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routerConfig } from './core/config/router-config.const';
import { HomeComponent } from './core/components/home/home.component';
import {AppController} from './app.controller';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: AppController.trans().home
    }
  },
  {
    path: routerConfig.users.base,
    loadChildren: () => import('./lazy/users/users.module').then(mod => mod.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
