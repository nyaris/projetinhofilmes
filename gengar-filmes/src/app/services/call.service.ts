import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../filmes/filme';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  filmes: Array<Filme> = [];
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  chamaAPI() {
    return this.http.get(`${this.baseUrl}/filmes`);
  }

  recebeAPI() {
    this.chamaAPI().subscribe((data: Array<Filme>) => {
      data.forEach(filme => this.teste.push(filme));
    });
    console.log(this.teste);
  }

  teste: Array<Filme> = [
    {
      "id": "1",
      "tituto": "Matrix",
      "genero": "Ação",
      "data": "21 de maio de 1999",
      "imagem": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
      "trailer": "2KnZac176Hs",
      "diretor": "Lana Wachowski",
      "escritor": "Lilly Wachowski",
      "elenco": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      "sinopse": "Matrix é um filme australo-estadunidense de 1999, dos gêneros ação e ficção científica, dirigido por Lilly e Lana Wachowski e protagonizado por Keanu Reeves, Laurence Fishburne e Carrie-Anne Moss.",
      "avaliacao": "8,7",
      "duracao": "2h 16min"
    },
    {
      "id": "2",
      "tituto": "Vingadores: Ultimato",
      "genero": "Ação",
      "data": "21 de abril de 2019",
      "imagem": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "trailer": "4QRdB4RAQMs",
      "diretor": "Anthony Russo",
      "escritor": "Christopher Markus",
      "elenco": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
      "sinopse": "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
      "avaliacao": "8,5",
      "duracao": "3h 1min"
    }
  ]

}
