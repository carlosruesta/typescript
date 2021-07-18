import {NegociacaoController} from "./controllers/negociacao-controller.js";

const negociacaoController = new NegociacaoController();

const form = document.querySelector('.form');

if (!form) {
    console.log(1);
    throw Error("Não foi possivel inicializar a aplicação. Falta o formulário");
}

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    negociacaoController.adiciona();
});
