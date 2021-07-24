import {Negociacao} from "./negociacao.js";
import {Imprimivel} from "../interfaces/imprimivel.js";
import {Comparavel} from "../interfaces/comparavel";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
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

    public ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.lista()) === JSON.stringify(objeto.lista());
    }

}
