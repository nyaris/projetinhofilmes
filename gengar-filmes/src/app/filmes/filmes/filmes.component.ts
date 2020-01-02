import { Component, OnInit } from '@angular/core';
import { CallService } from 'src/app/services/call.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  nome_filme = "Nome do Filme";
  duracao = "Tempo do filme";
  imagem = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  genero = "Genero do Filme";


  filmes: Array<Filme> = this.callService.filmes;
  
  constructor(private callService: CallService) { }

  ngOnInit() {
    this.callService.recebeAPI();
  }

}

