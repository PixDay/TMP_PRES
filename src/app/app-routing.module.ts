import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminArticlesComponent } from './pages/admin-articles/admin-articles.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminMembresComponent } from './pages/admin-membres/admin-membres.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-members', component: AdminMembresComponent},
  {path: 'admin-articles', component: AdminArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
