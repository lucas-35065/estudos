const alunos = [" Lucas", " Geovana", " Beatriz", " Laydiane", " Maria Carolina", " Cleiton"];

const sala1 = alunos.slice(0, alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);

console.log(`Estes são os alunos da sala 1: ${sala1}.`);
console.log(`Estes são os alunos da sala 2: ${sala2}.`);