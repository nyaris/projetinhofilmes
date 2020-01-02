import { Component, OnInit } from '@angular/core';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-novo-filme',
  templateUrl: './novo-filme.component.html',
  styleUrls: ['./novo-filme.component.css']
})
export class NovoFilmeComponent implements OnInit {

  constructor(private callService: CallService) { }

  ngOnInit() {
  }

  generos = this.callService.generos;

  salvarFilme(filme) {
    console.log(filme + ' Resposta Salvar Filme');
    // this.callService.postAPI;
  }

  onSubmit(filme) {
    console.log(filme + ' Resposta do onSubmit');
  }

}
