class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar (valor){
        this.saldo +=valor;
    }
    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor (nome, email, cpf, saldo, saldoPoupanca){
        super (nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca (valor){
        this.saldoPoupanca += valor;
    }

}

const lucas = new ClientePoupanca ('Lucas', 'lucas@email.com', '44444444444', 100000.00, 2000000.00);

console.log(lucas)

lucas.depositarPoupanca(50)
lucas.depositar(50)
console.log(lucas)
