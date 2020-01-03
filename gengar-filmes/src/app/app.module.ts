import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilmesComponent } from './filmes/filmes/filmes.component';
import { ListaFilmesComponent } from './filmes/lista-filmes/lista-filmes.component';
import { LoginComponent } from './login/login.component';
import { NovoFilmeComponent } from './filmes/novo-filme/novo-filme.component'
import { UserHomeComponent } from './page-layouts/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    DashboardComponent,
    FilmesComponent,
    ListaFilmesComponent,
    LoginComponent,
    NovoFilmeComponent,
    UserHomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  entryComponents: [NovoFilmeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
