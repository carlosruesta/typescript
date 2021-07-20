import {logarTempoExecucao} from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        const elemento = document.querySelector(selector);
        if (!elemento) {
            throw Error(`O selector de elemento ${selector} não existe. Verifique!`)
        }
        this.elemento = elemento as HTMLElement;
        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    @logarTempoExecucao()
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s|S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
