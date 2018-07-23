# Projeto Tasklist-UI

* Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8, através do comando `ng new tasklist-ui`.

---
## Tecnologias

* Este projeto foi estruturado para utilizar as seguintes tecnologias:

	* [Angular 6](https://angular.io/);
	* [PrimeNG](https://www.primefaces.org/primeng/#/);
	* [Bootstrap4](https://getbootstrap.com/).

---
## Pré-requisitos

* O versionador de código [*Git*](https://git-scm.com/);
* IDE para compatível com [*TypeScript*](https://www.typescriptlang.org/) (Ex.: [*Visual Studio Code*](https://code.visualstudio.com/));
* [*Node.js*](https://nodejs.org/en/) e [*npm*](https://www.npmjs.com/). O *npm* é instalado junto com o *Node.js*;
* [*Angular CLI*](https://cli.angular.io/). Para instalar o *Angular CLI* usaremos o *npm*. Para isso é necessário  1) Abrir um janela de terminal e 2) executar o comando `npm install -g @angular/cli => -g = global`.

---
## Servidor de desenvolvimento

* Para executar o servidor de desenvolvimento é só executar no terminal o comando `ng serve`, com isso a aplicação será publicada em um servidor *Node*. Para acessar a aplicação é só colocar a URL `http://localhost:4200/` no browser.

	**OBS.:** Qualquer alteração nos códigos fontes da aplicação será automaticamente recarregada no browser.

---
## Comandos para criar os artefatos

* Para gerar um novo componente execute o comando `ng g c [NOME_COMPONENTE]`.
* Para gerar um novo serviço execute o comando `ng g s services/[NOME_DIRETÓRIO]/[NOME_SERVIÇO]`.
	
	**OBS.:** Para que o *Angular CLI* não gere o arquivo de teste, precisa adicionar o parâmetro `--spec=false`, por exemplo `ng g c [NOME_COMPONENTE] --spec=false`.

* Para gerar uma nova classe execute o comando `ng generate class [NOME_DIRETÓRIO]/[NOME_CLASSE]`.

	* Criar as classes que representam as entidades no diretório **domain**.
	* Criar as classes relativas a internacionalização no diretório **i18n**. 

---
# Ajuda

* Para ajuda com o Angular CLI use `ng help` ou acesse [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).