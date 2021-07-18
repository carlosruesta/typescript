import {View} from "./view.js";

export class MensagemView extends View<string> {

    protected template(mensagem: string): string {
        return `
            <p class="allert alert-info">${mensagem}</p>
        `;
    }

}
