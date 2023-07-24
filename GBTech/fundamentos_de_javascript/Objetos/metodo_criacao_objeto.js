// Não podemos declarar um objeto assim: objeto2 = objeto1, porque os objetos utilizam uma alocação de memória única, sem criar cópias, então, o que for alterado em objeto2 será em objeto1, segue exemplo:

// const objeto1 = {
//     objeto: 'cadeira'
// }

// const objeto2 = objeto1;
// objeto2.objeto = 'mesa';
// console.log(objeto1)

//Para resolver, utilizamos o método abaixo:

const objPersonagem = {
    nome: 'Harry Potter',
    feitiços: 'Expecto Patronum',
    habilidade: 'Quadribol'
}

const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = 'Hermione Granger';
objPersonagem2.feitiços = 'Wingardium Leviosa';
objPersonagem2.habilidade = 'Estar em mais de um lugar ao mesmo tempo';

console.log(objPersonagem, objPersonagem2);

//adendo, variáveis sim criam cópias e alocam outro pedaço da memória, ou seja, o código abaixo funcionaria:

// let num1 = 5;
// let num2 = num1;
// num2 = 15

// console.log(num1, num2);