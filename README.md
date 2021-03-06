# typescript

## Curso 01

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

### Aula 04

- Modelagem da classe Negociacoes
- Utiliação de Generics
- Revisão sobre encapsulamento
- Questões de mutabilidade e como solucioná-la
- O tipo ReadonlyArray
- Adição de negociações em nossa lista

### Aula 05

- Nova maneira de declaração de array com generics
- O tipo ReadonlyArray
- O modificador readonly
- Getters vs propriedades públicas em modo de leitura
- Programação defensiva 

## Curso 02

### Aula 01

- Inpiração no React para criação de templates declarativos e dinâmicos
- Template dinâmico
- Manipulação declarativa do DOM através de template
- Formatação de datas usando Intl

### Aula 02

_ Herança com TypeScript
_ Classes com tipo genérico
_ Classes abstratas
_ O modificador protected

### Aula 03

- Visibilidade de métodos
- Validando negociações em dias úteis
- Vantagens do uso de enums
- Cuidados com enums
                    
### Aula 04

- Revisão da lógica de conversão negociações
- Método estáticos
- Parâmetros opcionais

### Aula 05

- StrictNullChecks => Diz para o compilador TSC que pare de assumir implicitamente o tipo null para todos os tipos da aplicação. 
   + Caso null faça sentido, o desenvolvedor deve deixar isso explícito em seu código. 
   + Inclusive o StrictNullChecks obrigará o desenvolvedor a tratar todos os pontos de acesso a valores null em sua aplicação, forçando que o desenvolvedor pondere com cuidado cada cenário.
    
_ Remoção de comentários do código compilado
_ Ativação do strictNullChecks
_ Como suprimir erros, quando fizer sentido, resultantes do strictNullChecks
_ Benefícios do strictNullChecks no controle do fluxo da sua aplicação

## Curso 03

### Aula 01

- Introdução e estrutura do projeto
- Requisitos não funcionais
- Decorator de método
- Logar tempo de execução com decorator

### Aula 02

- Decorator com parâmetro
- Criação de um decorator de inspeção
- Ordem de execução dos decorators
- Simplicação no design de decorators
- Portabilidade de funcionalidade antiga para decorators

### Aula 03

- Como evitar código duplicado
- Decorator de propriedade
- Criação dinâmica de getters
- O uso de Object.defineProperty
- Cache de decorators

### Aula 04

- API externa
- Consumindo API externa
- Definindo uma interface para a API
- Isolando o acesso à API em um serviço

### Aula 05

- Chega de múltiplos console.log
- Aplicação prática do Polimorfismo
- Interface de método
- Evitando importar negociações duplicadas
- Estendendo interfaces
- Geração de sourmaps e debug da aplicação no navegador
