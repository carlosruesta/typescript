import {NegociacaoDoDia} from "../interfaces/negociacao-do-dia.js";
import {Negociacao} from "../models/negociacao.js";

export class NegociacoesDoDiaService {

    public static obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(resp => resp.json())
            .then(
                (negociacoesDoDia: NegociacaoDoDia[]) => negociacoesDoDia.map(
                    negociacaoDoDia => new Negociacao(
                        new Date(),
                        negociacaoDoDia.vezes,
                        negociacaoDoDia.montante
            )));
    }

}
