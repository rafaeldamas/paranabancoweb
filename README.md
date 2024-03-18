<h1 align="center">
    <a href="https://pt-br.reactjs.org/">ParanaBanco</a>
</h1>
<p align="center">Testes automatizados web do case técnico</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#-Sobre-o-projeto)
   * [Como executar o projeto](#-como-executar-o-projeto)
      * [Pré Requisitos](#user-content-pre-requisitos)
   * [Rodando o Software](#-rodando-o-software)
<!--te-->

## 💻 Sobre o projeto

Este é um projeto do desafio da ParanaBanco de mapeamento dos elementos apresentados na tela. Cliques nos botões randômicos da tela e clique em todos os edit e delete dentro da tabela

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `2.34.1`)
- npm (estou usando a versão `8.3.2`)
- [Google Chrome](https://www.google.com/intl/pt_br/chrome/) (estou usando a versão `98.0.4758.80 (Official Build) (x86_64)`)
- [VSCode](https://code.visualstudio.com/) (estou usando a versão `1.64.0`)

> **Obs.:** Recomendo utilizar as mesmas versões, ou versões mais recentes dos sistemas listados acima.
>
> **Obs. 2:** Ao instalar o Node.js o npm é instalado junto. 🎉
>
> **Obs. 3:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.
>
> **Obs. 4:** Deixei links para os instaladores na lista de requisitos acima, caso não os tenha instalados ainda.

___
### 🎲 Rodando o Software

```bash
# Clone este repositório
$ git clone git@github.com:rafaeldamas/paranabancoweb.git

# Instale o cypress
$ npm install cypress@9.5.1 --save-dev

# Execute a aplicação em desktop
$ Rode `npm test` (ou `npm t` para a versão curta) para rodar o teste em headless mode. 
$ Ou, rode `npx cypress open` para abrir o Cypress no modo interativo. 

# Executando a aplicação em mobile
$ Rode `npm run test:mobile` para rodar o teste em headless mode. 
$ Ou, rode `npm run cy:open:mobile` para abrir o Cypress no modo interativo.
```

---
