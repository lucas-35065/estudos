const salaPintura = [10, 8, 7, 5];
const salaDesenho = [4, 3, 10, 10];

function mediaSala (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce ((acum, atual) => atual + acum, 0);
    return somaDasNotas/notasDaSala.length;
}

console.log (`A média das notas da sala de Pintura é: ${mediaSala(salaPintura)}!`)
console.log (`A média das notas da sala de Desenho é: ${mediaSala(salaDesenho)}!`)

const notas = [10, 1.5, 8, 9];

const media = notas.reduce((acum, atual) => (acum + atual)/ notas.length);
console.log(`A média é ${media}.`);

//o acumulador sempre será o primeiro parametro

