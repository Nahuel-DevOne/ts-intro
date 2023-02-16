/*
    ===== Código de TypeScript =====
*/

/** Encadenamiento opcional */

interface Pasajero {
    nombre: string;
    hijos?: string[]; // esta propiedad es opcional con el ?
}

const pasajero1: Pasajero = {
    nombre: 'Nahuel'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void { // con void se aclara que no retorna nada
    const cuantosHijos = pasajero.hijos?.length || 0; // con el ? antes del length se hace opcional, si es undefined retorna 0 sino el length
    console.log(cuantosHijos); // sin el ? arriba en vez de dar 0 daría undefined
}

imprimeHijos(pasajero1);

