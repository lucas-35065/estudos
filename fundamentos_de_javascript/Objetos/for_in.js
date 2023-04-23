const cliente = {
    nome: 'Lucas',
    idade: 22,
    cpf: '00011122233',
    email: 'lucas@email.com.br',
    fones: ['11993658120', '11976024623'],
    dependente : [
        {
        nome: 'Geovana',
        dataNasc: '04/07/1999',
        empregada: true},
        {
        nome: 'Pipoca',
        dataNasc: '15/03/2020',
        empregada: false}
    ],
    saldo: 1000,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    }
}

let relatorio = '';

for (let info in cliente) {
    if (typeof cliente [info] === 'object' || typeof cliente [info] === 'function'){
        continue
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `
    }
}

console.log(relatorio)