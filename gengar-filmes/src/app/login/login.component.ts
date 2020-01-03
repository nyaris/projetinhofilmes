import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) { }
  
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

      alert(senha);

    }
    }