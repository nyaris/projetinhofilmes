import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CallService } from 'src/app/services/call.service';
import { Usuario } from '../login/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, private fb: FormBuilder, private service: CallService) { }
  
  loginForm: FormGroup;
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  login() : void {
    let username = this.loginForm.get("username").value;
    let senha = this.loginForm.get("senha").value;
    this.service.getUsuario(username)
      .subscribe(
        (usuarios: Usuario) => {
          if(Array.isArray(usuarios) && usuarios.length) {
            usuarios.forEach(usuario => {
              if(senha == usuario.senha) {
                this.router.navigate(['filmes']);
              } else  {
                alert("Senha incorreta !!");
              }
            })
          }
        }
      );
  }
}