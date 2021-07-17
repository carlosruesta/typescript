import {Negociacao} from "../models/negociacao.js";

export class NegociacaoController {

    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#quantidade');
        this.inputQuantidade = document.querySelector('#valor');
    }

    adiciona() {

        const negociacao = new Negociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        console.log(negociacao);
    }

}
