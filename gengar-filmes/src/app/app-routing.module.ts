import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EditaFilmesComponent } from './filmes/edita-filmes/edita-filmes.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './page-layouts/user-home/user-home.component';
import { FilmesComponent } from './filmes/filmes/filmes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'editar', component: EditaFilmesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'filmes', component: FilmesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }