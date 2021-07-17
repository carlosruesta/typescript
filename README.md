# typescript

### Aula 01

#### Infra
- Instalação do NodeJS para rodar servidor de aplicação
- Instalação de dependencias: npm install
- Rodar o projeto: npm run server

#### Sistema de módulos ECMAScript
- Importando um modulo no projeto
  ```
  <script type="module" src="js/app.js"></script>
  ```
- Sistema de módulos do ECMAScript permite adicionar um único módulo no projeto e o navegador se encarrega de chamar automaticamente os módulos dependentes;
- Tudo o que for declarado dentro de um módulo estará confinado nesse módulo, ao menos que o desenvolvedor decida exportar uma ou mais funcionalidades;

#### Modelo de negociação
- Uma negociação não poder ser modificada depois de criada;
- Obrigatoriamente tem uma data, quantidade e valor;
- Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado;

### Motivação do Typescript
- JS permite adição dinamica de atributos na classe
- JS não forca a instanciar a classe com os atribuitos obrigatorios

