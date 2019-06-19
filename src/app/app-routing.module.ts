import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTING_CONFIG } from './core/config/app-routing-config.const';

const routes: Routes = [
  {
    path: APP_ROUTING_CONFIG.USERS.BASE,
    loadChildren: () => import('./pages/users/users.module').then(mod => mod.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
