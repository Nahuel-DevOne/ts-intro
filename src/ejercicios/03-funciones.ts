/*
    ===== Código de TypeScript =====
*/
// Funciones

function sumar(a:number, b:number): number {
    return (a + b);
}

const sumarFlecha = (a:number, b:number):number => a + b;

// Primero se deberían pasar los datos obligatorios, luego, los por defecto, y por último los no obligatorios
// Pero igual se puede resolver
function multiplicar(num1:number, num2?:number, base:number = 2):number {
    return num1 * base;
}

const resultadoSumar = sumar(10, 14);
console.log(resultadoSumar)

const resultadoMultiplicar = multiplicar(5, 0, 10);
console.log(resultadoMultiplicar)

// Funciones con objetos como argumentos

// Aprovechando la interface para restringir el objeto
interface PersonajeModelo{
    nombre: string,
    pv: number,
    mostrarPV: () => void;
}

// "void" para decir que la función no retorna nada, aunque implícitamente JS retonará en este caso UNDEFINED
function curar(personaje: PersonajeModelo, curarX:number):void {

    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeModelo = {
    nombre: 'Nahuel',
    pv: 80,
    mostrarPV(){
        console.log('Puntos de vida: ', this.pv);
    }
}
console.log(nuevoPersonaje);

curar( nuevoPersonaje, 20);
console.log(nuevoPersonaje)

nuevoPersonaje.mostrarPV()










