import { Component, OnInit } from '@angular/core';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-novo-filme',
  templateUrl: './novo-filme.component.html',
  styleUrls: ['./novo-filme.component.css']
})
export class NovoFilmeComponent implements OnInit {

  novoFilme = {
    "id": +this.callService.filmes[this.callService.filmes.length - 1].id + 1,
    "tituto": '',
    "genero": '',
    "data": '',
    "imagem": '',
    "trailer": '',
    "diretor": '',
    "escritor": '',
    "elenco": '',
    "sinopse": '',
    "avaliacao": '',
    "duracao": '',
  }

  generos = this.callService.generos;

  constructor(private callService: CallService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.callService.postAPI(JSON.stringify(this.novoFilme));
  }

}