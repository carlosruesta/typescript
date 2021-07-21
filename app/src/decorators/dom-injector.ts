// aqui é um decorator de atributo
export function domInjector(seletor: string) {
    return function (
        target: any,        // se for uma propriedade estatica de uma classe -> retorna a função construtora da classe
                            // se não for propriedade estática -> retorna o prototype da classe
                            // portanto não temos referencia à instancia da classe
        propertyKey: string
    ) {

        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement> document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar o na propriedade ${propertyKey}`);
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        );
    }
}
