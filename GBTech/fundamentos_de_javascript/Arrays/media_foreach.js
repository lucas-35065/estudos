const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach (notas => {somaDasNotas += notas;})

// o forEach tbm pode ser escrito com a function completa notas.forEach (function (notas) { somaDasNotas += notas;})

let media = somaDasNotas/notas.length;

console.log(media);