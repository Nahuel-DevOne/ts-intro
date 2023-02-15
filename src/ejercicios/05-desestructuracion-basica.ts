/*
    ===== Código de TypeScript =====
*/

// interface Reproductor {
//     volumen: number;
//     segundo: number;
//     cancion: string;
//     detalles: Detalles;
// }

// interface Detalles {
//     autor: string;
//     anio: number;
// }

// const reproductor: Reproductor = {
//     volumen: 90,
//     segundo: 36,
//     cancion: 'Mess',
//     detalles: {
//         autor: 'Ed Sheeran',
//         anio: 2015
//     }
// }

// Accediendo a las propiedades del objeto de la forma tradicional, con notación de punto:

// console.log('El volumen actual es de: ', reproductor.volumen)
// console.log('El segundo actual es de: ', reproductor.segundo)
// console.log('La canción actual es: ', reproductor.cancion)
// console.log('El autor es: ', reproductor.detalles.autor)

// Usando Destructuring con objetos
// const { volumen, segundo, cancion, detalles, } = reproductor
// const { autor } = detalles;
// Otra opción para hacerlo en una misma línea
// const { volumen, segundo, cancion, detalles:{autor}, } = reproductor
// Y si se chocara con el nombre de una variable como por ejemplo:
// const autor = 'Fulano';
// Se puede asignar otro nombre de la siguiente manera:
// const { volumen, segundo, cancion, detalles:{autor: autorDetalle}, } = reproductor;

// console.log('El volumen actual es: ', volumen)
// console.log('El segundo actual es: ', segundo)
// console.log('La canción actual es: ', cancion)
// console.log('El autor es: ', detalles.autor)
// console.log('El autor es: ', autor)

// Destructuring de arreglos
// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// Sin destructuring
// console.log('Personaje 1:', dbz[0]);
// console.log('Personaje 2:', dbz[1]);
// console.log('Personaje 3:', dbz[2]);
// Con destructuring
// const [p1, p2, p3] = dbz;
// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
// console.log('Personaje 3:', p3);




