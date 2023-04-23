//Utilizado quando você quer utilizar alguma informação do objeto como variável

const cliente = {
    nome: 'Lucas',
    idade: 22,
    cpf: '00011122233',
    email: 'lucas@email.com.br'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

// transformou o objeto em variável, é bom utilizar quando não se sabe bem o nome da chave e quando você a quer em variável
console.log (cliente [chaves[0]]);

// Aqui você cosegue passar por todos os itens do objeto, então é uma das funcionalidades de passar assim
chaves.forEach (info => console.log(cliente[info]));

console.log (cliente['cpf']);

