import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPlaceholder: string;
  loginButton: string;
  passwordPlaceholder: string;
  
  constructor() { }

  ngOnInit() {
    this.emailPlaceholder = 'Digite o e-mail...';
    this.loginButton = 'Entrar';
    this.passwordPlaceholder = 'Digite a senha...';
    
  }

}
