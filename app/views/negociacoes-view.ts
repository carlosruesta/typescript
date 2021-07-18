import {Negociacoes} from "../models/Negociacoes.js";
import {Negociacao} from "../models/negociacao";
import {View} from "./view.js";

export class NegociacoesView extends View {

    template(model: Negociacoes): string {
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

    update(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model);
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
