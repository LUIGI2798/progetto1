import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoadingComponent } from '../loading/loading.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, LoadingComponent, RegisterComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, AuthRoutingModule],
})
export class AuthModule {}
