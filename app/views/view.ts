export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        this.elemento = document.querySelector(selector) as HTMLElement;
        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s|S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
