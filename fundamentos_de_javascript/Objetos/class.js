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

const lucas = new Cliente ('Lucas', 'lucas@email.com', '44444444444', '100.000,00');

console.log(lucas)