const clientes = [
    {
    nome: 'Lucas',
    idade: 22,
    cpf: '00011122233',
    email: 'lucas@email.com.br',
    fones: ['11993658120', '11976024623'],
    dependente :[{
        nome: 'Pipoca',
        dataNasc: '15/03/2020',
        empregada: false}],
    },
    {
    nome: 'Geovana',
    idade: 23,
    cpf: '11111111111111',
    email: 'geovana@email.com.br',
    fones: '1199999999999',
    dependente: [{
        nome: 'Maria',
        dataNasc: '15/03/2018',
        empregada: false}]
    }
];

let j = 'dependente';

// for (i = 0; i < clientes.length; i++ ) {
//     const listaDependentes =  [...clientes[i][j]];
//     console.log (listaDependentes);
// }

clientes.forEach (obj => {
    const listaDependentes = [...obj[j]];
    console.table (listaDependentes);
})