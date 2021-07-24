import {Imprimivel} from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel {
	// private _data: Date;
	// private _quantidade: number;
	// private _valor: number;

	constructor(
		private readonly _data: Date,
		public quantidade: number,
		public valor: number
	){}

	get data(): Date {
		return new Date(this._data.getTime());
	}

	get volume(): number {
		return this.quantidade * this.valor;
	}

	public static criaDe(data: string, quantidade: string, valor: string): Negociacao {
		const expReg = /-/g;
		const dataDate = new Date(data.replace(expReg, ','));
		return new Negociacao(dataDate, parseInt(quantidade), parseFloat(valor));
	}

	public paraTexto(): string {
		return `
			Data: ${this._data.toString()},
			Quantidade: ${this.quantidade},
			Valor: ${this.valor}
		`;
	}


}
