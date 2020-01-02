import { Component, OnInit } from '@angular/core';
import { CallService } from 'src/app/services/call.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-novo-filme',
  templateUrl: './novo-filme.component.html',
  styleUrls: ['./novo-filme.component.css']
})
export class NovoFilmeComponent implements OnInit {

  novoFilme = {
    "id": (this.callService.filmes.length + 1).toString(),
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

  constructor(private callService: CallService) { }

  ngOnInit() {
  }

  generos = this.callService.generos;

  onSubmit() {
    console.log(this.novoFilme);
    this.callService.postAPI(JSON.stringify(this.novoFilme));
  }

}