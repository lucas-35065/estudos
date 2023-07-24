const cliente = {
    nome: 'Lucas',
    idade: 22,
    cpf: '00011122233',
    email: 'lucas@email.com.br'
}

delete cliente.nome;
delete cliente ['idade'];

console.log (cliente);