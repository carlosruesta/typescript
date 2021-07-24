import {Negociacao} from "../models/negociacao.js";
import {Negociacoes} from "../models/negociacoes.js";
import {NegociacoesView} from "../views/negociacoes-view.js";
import {MensagemView} from "../views/mensagem-view.js";
import {DateUtils} from "../utils/DateUtils.js";
import {logarTempoExecucao} from "../decorators/logar-tempo-execucao.js";
import {inspecionar} from "../decorators/inspecionar.js";
import {domInjector} from "../decorators/dom-injector.js";

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement ;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        // this.inputData = document.querySelector('#data') as HTMLInputElement;
        // this.inputValor = document.querySelector('#quantidade') as HTMLInputElement;
        // this.inputQuantidade = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @inspecionar
    @logarTempoExecucao(true)
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!DateUtils.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Somente pode adicionar negociações em dias úteis");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso");
    }

    public importaDados(): void {
        fetch('http://localhost:8080/dados')
            .then(resp => resp.json())
            .then(
                (dados: any[]) => dados.map(
                    dado => new Negociacao(
                        new Date(),
                        dado.vezes,
                        dado.montante
            )))
            .then(
                negociacoesDeHoje =>
                    negociacoesDeHoje.forEach(
                        (negocicaoDeHoje: Negociacao) => {
                            this.negociacoes.adiciona(negocicaoDeHoje);
                            this.negociacoesView.update(this.negociacoes);
                            this.mensagemView.update("Negociações importadas com sucesso");
                        }
            ));
    }
}
