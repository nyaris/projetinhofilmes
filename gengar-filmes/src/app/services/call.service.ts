import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from '../filmes/filme';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CallService {

  filmes: Array<Filme> = [];
  generos: Array<string> = ['Romance', 'Ação', 'Live Action'];
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  chamaAPI() {
    return this.http.get(`${this.baseUrl}/filmes/`);
  }

  recebeAPI() {
    this.filmes.length = 0;
    this.chamaAPI().subscribe(
      (data: Array<Filme>) => data.forEach(filme => this.filmes.push(filme))
      );
  }

  postAPI(novoFilme) {
    this.http.post(`${this.baseUrl}/filmes/`, novoFilme, httpOptions).subscribe((data: Filme) => this.filmes.push(data));
  }

  deleteAPI(id) {
    this.http.delete(`${this.baseUrl}/filmes/${id}`, httpOptions).subscribe(
      (data: Filme) => {
        const exclued = this.filmes.indexOf(this.filmes.find(filme => filme.id === id));
        this.filmes.slice(exclued-1, exclued);
        this.recebeAPI();
      });
  }

}