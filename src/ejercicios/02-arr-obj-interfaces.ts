/*
    ===== Código de TypeScript =====
*/

// arreglos

// let habilidades: (string | number | boolean)[] = ['Bash', 'Counter', 'Healing', 100, true];
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

// Interface
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

// Objeto

const personajePrincipal: Personaje = {
    nombre: 'Nahuel',
    hp: 100,
    habilidades: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'C#']
}

personajePrincipal.puebloNatal = 'Capital'

console.table(personajePrincipal);


