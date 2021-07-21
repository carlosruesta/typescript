export function logarTempoExecucao(
    emSegundos: boolean = false
    ) {
    return function (
        target: any,            // dependendo de onde estiver o decorator pode ser uma função construtora (caso de um método estático) ou um prototype (referencia ao pai - herança) em caso de método comum
        propertyKey: string,    // nome do método como string que foi decorado
        descriptor: PropertyDescriptor     // referencia ao método original que será decorado
    ) {
        // salvo o metodo original para usar depois
        const metodoOriginal = descriptor.value;

        // aqui é onde alteramos o método original
        descriptor.value = function (...args: Array<any>) {

            let divisor = 1
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();

            // chama o método original
            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();
            console.log(`Tempo de execução no método ${propertyKey}: ${(t2 - t1)/divisor} ${unidade}`);
            return retorno;
        }
        return descriptor;
    }
}
