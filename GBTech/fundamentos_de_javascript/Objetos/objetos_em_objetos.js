const cliente = {
    nome: 'Lucas',
    idade: 22,
    cpf: '00011122233',
    email: 'lucas@email.com.br',
    fones: ['11993658120', '11976024623']
}

console.log(cliente);

cliente.conjuge = {
    nome: 'Geovana',
    idade: 23,
    tempRelacto: '4 anos e 6 meses',
    empregada: true
}

console.log(cliente);

cliente.conjuge.nome = 'Geovana Gomes da Silva Ribeiro';

console.log(cliente);