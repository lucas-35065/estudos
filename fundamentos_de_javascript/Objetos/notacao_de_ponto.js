//método para acessar as infos de um objeto

const cliente = {
    nome: 'Lucas',
    idade: 22,
    cpf: '00011122233',
    email: 'lucas@email.com.br'
}

console.log(`Meu nome é ${cliente.nome} e eu tenho ${cliente.idade} anos.`);
console.log (`Seu CPF é o que começa com estes 3 dígitos: ${cliente.cpf.substring(0,3)}.***.***-**?`);