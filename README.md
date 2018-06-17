# Projeto Template-UI

* Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8, através do comando `ng new template-ui`.

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
## Configuração do ambiente

* Clonar os fontes do repositório *git* via **ssh** `git clone git@bitbucket.org:pauloeffernandes/template-ui.git` **OU** **https** `git clone https://pauloeffernandes@bitbucket.org/pauloeffernandes/template-ui.git`;
* Entrar no diretório **template-ui** que foi criado após o clone do repositório, abrir um terminal neste diretório e executar o comando `npm install`, com isso o diretório **node_modules** é criado com as dependências do projeto;
* Após a execução do **npm install** já é possível iniciar o servidor com o comando `ng serve`;
* Importar o projeto no *Visual Studio Code*, para isso, após abrir a *IDE*, selecionar *File* > *Open Folder...* e selecionar o diretório do **template-ui**;
* Após importado o projeto, para facilitar podemos abrir um terminal dentro da *IDE*, através do menu *View* > *Integrated Terminal*

---
## Servidor de desenvolvimento

* Para executar o servidor de desenvolvimento é só executar no terminal o comando `ng serve`, com isso a aplicação será publicada em um servidor *Node*. Para acessar a aplicação é só colocar a URL `http://localhost:4200/` no browser.

	**OBS.:** Qualquer alteração nos códigos fontes da aplicação será automaticamente recarregada no browser.

---
## Comandos para criar os artefatos

* Para gerar um novo componente execute o comando `ng g c [NOME_COMPONENTE]`.
* Para gerar um novo serviço execute o comando `ng g s [NOME_SERVIÇO]`.
	
	**OBS.:** Para que o *Angular CLI* não gere o arquivo de teste, precisa adicionar o parâmetro `--spec=false`, por exemplo `ng g c [NOME_COMPONENTE] --spec=false`.

## Configurações da aplicação
* Alterar ***favicon.ico***:
	* Substituir o arquivo ***favicon.ico*** localizado em ***src/***. Este arquivo é referenciado no ***index.html***.
* Alterar o logo da aplicação:
	* Substituir o arquivo ***logo.png*** localizado em ***src*/*assets*/*img***. O logo é utilizado em na variável ***pageLogo*** do arquivo ***navbar.component.ts***, localizado em ***src*/*app*/*navbar*/**.
 

---
# Opções de execução

## Build da aplicação

* Executar o comando `ng build` para buildar o projeto. O artefato gerado será armazenado no diretório `dist/`. Usar a *flag* `--prod` para gerar a aplicação de produção.

---
## Executar os testes unitários

* Para executar os teste unitários execute o comando `ng test`. Será executado os testes via [Karma](https://karma-runner.github.io).

---
## Executar os testes *end-to-end*

* Para executar testes *end-to-end*, execute o comando `ng e2e`. Será executado os testes via [Protractor](http://www.protractortest.org/).

---
# Ajuda

* Para ajuda com o Angular CLI use `ng help` ou acesse [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).