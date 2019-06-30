import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {AppController} from '../../app.controller';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      title: AppController.trans().users
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
