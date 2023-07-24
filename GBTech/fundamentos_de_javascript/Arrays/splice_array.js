const listaDeChamada = [" Rogério", " Marcos", " Ananda"];

listaDeChamada.splice(1, 2, " Paula");

console.log (`Esta é a lista de chamada do dia 21/03: ${listaDeChamada}`);

listaDeChamada.splice(1, 0, " Gabriel");

console.log (`Esta é a lista de chamada do dia 02/04: ${listaDeChamada}.`);
