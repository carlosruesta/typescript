import {Negociacao} from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);

console.log(negociacao);

// negociacao.quantidade = 1900;

console.log(negociacao.volume);

