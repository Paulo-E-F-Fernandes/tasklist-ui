import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string;
  emailLabel : string;
  emailPlaceholder : string;
  forgetPasswordLabel : string;
  loginButton : string;
  passwordLabel : string;
  passwordPlaceholder : string;
  rememberMeLabel : string;
  signUpLabel : string;

  constructor() { }

  ngOnInit() {
    this.userName = 'Anônimo';
    this.emailLabel = 'E-mail';
    this.emailPlaceholder = 'Digite o e-mail...';
    this.forgetPasswordLabel = 'Esqueceu a senha?';
    this.loginButton = 'Entrar';
    this.passwordLabel = 'Senha';
    this.passwordPlaceholder = 'Digite a senha...';
    this.rememberMeLabel = 'Manter conectado?';
    this.signUpLabel = 'Novo por aqui? Cadastre-se.'
  }

}
