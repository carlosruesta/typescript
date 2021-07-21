import {logarTempoExecucao} from "../decorators/logar-tempo-execucao.js";
import {inspecionar} from "../decorators/inspecionar.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(selector: string) {
        const elemento = document.querySelector(selector);
        if (!elemento) {
            throw Error(`O selector de elemento ${selector} não existe. Verifique!`)
        }
        this.elemento = elemento as HTMLElement;
    }

    protected abstract template(model: T): string;

    @inspecionar
    @logarTempoExecucao()
    public update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }
}
