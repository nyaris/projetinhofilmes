import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CallService } from 'src/app/services/call.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  filmes: Array<Filme> = [];
  
  constructor(private callService: CallService) { }

  async ngOnInit() {
    this.callService.recebeAPI();
  }

  displayedColumns: string[] = ['tituto', 'genero', 'duracao', 'elenco', 'avaliacao'];
  dataSource = new MatTableDataSource(this.callService.teste);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
