function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function depositar (valor){
        this.saldo += valor;
    }
}


function ClientePoupanca (nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup
}

const lucas = new ClientePoupanca('Lucas', '44400044400', 'lucas@email.com.br', 100, 400);

console.log(lucas)

ClientePoupanca.prototype.depositarPoup = function (valor){
    this.saldoPoup += valor;
}

lucas.depositarPoup (30)
console.log (lucas.saldoPoup);
