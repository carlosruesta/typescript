import {View} from "./view.js";

export class MensagemView extends View{

    template(mensagem: string): string {
        return `
            <p class="allert alert-info">${mensagem}</p>
        `;
    }

    update(mensagem: string): void {
        this.elemento.innerHTML = this.template(mensagem);
    }
}
