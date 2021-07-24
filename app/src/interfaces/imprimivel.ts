export interface Imprimivel {
    paraTexto(): string;
}

export  function imprimeNoConsole(...objetos : Array<Imprimivel>): void {
    objetos.forEach(objeto => console.log(objeto.paraTexto()));
}
