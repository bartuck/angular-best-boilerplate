import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserModule } from '../../features/user/user.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }

