const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0; //sempre que quiser acrescentar algo com o 'for', declarar a variável fora do for, pois declarando dentro, a variável será zerada

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas [i];
}

let media = somaDasNotas/notas.length;

console.log (media);