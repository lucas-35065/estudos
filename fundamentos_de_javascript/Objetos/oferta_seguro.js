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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes ('dependente')){
        console.log(`Oferecer seguro para ${obj.nome}`)
    }
}

oferecerSeguro(cliente);

// mostra o valor das chaves:
console.log (Object.values(cliente));

// cria uma array com a chave no index 0 e os valores no 1
console.log (Object.entries(cliente));
