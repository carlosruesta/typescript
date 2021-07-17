import {Negociacao} from "../models/negociacao.js";

export class NegociacaoController {

    private inputData: HTMLInputElement ;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#quantidade');
        this.inputQuantidade = document.querySelector('#valor');
    }

    adiciona() {

        const negociacao = new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
        console.log(negociacao);
    }

}
