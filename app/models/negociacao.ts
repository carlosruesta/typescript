export class Negociacao {
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
}
