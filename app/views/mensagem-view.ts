export class MensagemView {

    private containerMensagem: HTMLElement;

    constructor(selector: string) {
        this.containerMensagem = document.querySelector(selector);
    }

    template(mensagem: string): string {
        return `
            <p class="allert alert-info">${mensagem}</p>
        `;
    }

    update(mensagem: string): void {
        this.containerMensagem.innerHTML = this.template(mensagem);
    }
}
