/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'Ipad Air',
    precio: 350
}

export function calculaISV( productos: Producto[] ):[number, number] {

    let total = 0;
    
    // productos.forEach( producto => {
    //     total += producto.precio;
    // })

    // Lo mismo haciendo destructuring de argumentos
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return [total, total * 0.15];

}

const articulos = [telefono, tableta];

// const isv = calculaISV(articulos);
// console.log('ISV:', isv);

const [ total, isv ] = calculaISV(articulos);
console.log('Total:', total);
console.log('ISV:', isv);


