import {Negociacao} from "./negociacao.js";
import {Imprimivel} from "../utils/imprimivel.js";

export class Negociacoes implements Imprimivel {
    // private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes);
    }
}
