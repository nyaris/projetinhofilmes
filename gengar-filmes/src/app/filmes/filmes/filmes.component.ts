import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  card = "genero";
  nome_filme = "Nome do Filme";
  duracao = "Tempo do filme";
  imagem = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  genero = "Genero do Filme";


  constructor() { }

  ngOnInit() {
  }

}

