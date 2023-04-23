const cliente = {
    nome: 'Lucas',
    idade: 22,
    cpf: '00011122233',
    email: 'lucas@email.com.br',
    fones: ['11993658120', '11976024623'],
    dependente : [{
        nome: 'Geovana',
        dataNasc: '04/07/1999',
        empregada: true
    }]
}

cliente.dependente.push({
    nome: 'Pipoca',
    dataNasc: '15/03/2020',
    empregada: false
});

const dependenteMaisNovo = cliente.dependente.filter (dependentes => dependentes.dataNasc === '15/03/2020');

console.log(dependenteMaisNovo[0].nome)
