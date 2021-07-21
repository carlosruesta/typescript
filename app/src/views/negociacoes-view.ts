import {Negociacoes} from "../models/negociacoes.js";
import {Negociacao} from "../models/negociacao.js";
import {View} from "./view.js";
import {escapar} from "../decorators/escapar.js";

export class NegociacoesView extends View<Negociacoes> {

    @escapar
    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>   
                <tbody>
                    ${model.lista().map(
                        negociacao => NegociacoesView.linhaNegociacao(negociacao)
                    ).join('')}
                </tbody>     
            </table>    
        `;
    }

    private static linhaNegociacao(negociacao: Negociacao): string {
        return `
            <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
            </tr>
        `;
    }
}
