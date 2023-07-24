const nomes = ['Matilda', 'Guilherme', 'Talita', 'Vitor'];
const notas = [7, 3, 8, 4.9];

const reprovados = nomes.filter((_nome, indice) => notas [indice] < 5 );

console.log (reprovados);

// o filter retorna valores booleanos. Se a comparação feita for true, o item é adicionado na array, ou seja, na const reprovados, eu fiz com que o notas fosse verificado um a um, aqueles menores que cinco foram adicionados à reprovados. Uma array se associa a outra