import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NovoFilmeComponent } from '../filmes/novo-filme/novo-filme.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  addFilme() {
    this.dialog.open(NovoFilmeComponent);
  }
}