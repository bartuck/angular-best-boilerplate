import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserModule } from '../../features/user/user.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }

