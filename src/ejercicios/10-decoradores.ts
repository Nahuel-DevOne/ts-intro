/*
    ===== Código de TypeScript =====
*/

/** Decoradores */
// Los decoradores sirven para expandir o añadir funcionalidades
// Un decorador no es más que una función que expande su clase, agregando funcionalidades
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo');
    }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad)



