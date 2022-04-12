import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { LoginComponent } from './modules/admin/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
