export class View<T> {

    protected elemento: HTMLElement;

    constructor(selector: string) {
        this.elemento = document.querySelector(selector);
    }

    template(model: T): string {
        throw new Error("Classe filha deve implementar esse método");
    }

    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }
}
