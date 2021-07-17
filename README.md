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

### Aula 02

#### Instalando o typescript

- Comando para instalar: npm install typescript@4.2.2 --save-dev
- Ao executar o comando acima o npm já adicina a dependencia no package.json
- O uso do Node.js não é opcional, pois o compilador depende desta plataforma para funcionar
- O Typescript é baixado pelo seu gerenciador de pacotes npm. 
- O código TypeScript precisa ser traduzido/convertido para um código em ECMASCRIPT para que seja entendido pelo navegador. Lembre-se que apenas ECMASCRIPT é suportado pelo navegador.

- Configuração do compilador e papel do tsconfig.json
- Integração com scripts do Node.js na configuração do typescript fazendo com que o browser seja atualizado automaticamente e nosso codigo compilado para EMACScript 
- Modificadores de accesso private e public
- Benefícios iniciais da linguagem TypeScript

### Aula 03

- Evitando o usdo do tipo implícito 'any'
- Benefícios da tipagem estática... tipamos todas as variveis, atribuitos e funcoes
- Mais configurações do compilador tsc: noImplicityAny
- Retorno de método explícito. Declarando o tipo de retorno de função.
- Conversão de valores da interface do usuário
