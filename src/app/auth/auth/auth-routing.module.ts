import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { HomeComponent } from '../../pages/home/home.component';
import { LoadingComponent } from '../loading/loading.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'loading', component: LoadingComponent, title: 'loading' },
  { path: 'register', component: RegisterComponent, title: 'register' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
