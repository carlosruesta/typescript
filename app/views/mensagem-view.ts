import {View} from "./view.js";

export class MensagemView extends View<string> {

    template(mensagem: string): string {
        return `
            <p class="allert alert-info">${mensagem}</p>
        `;
    }

}
