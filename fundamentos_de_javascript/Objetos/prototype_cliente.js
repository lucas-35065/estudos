function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function depositar (valor){
        this.saldo += valor;
    }
}

const lucas = new Cliente('Lucas', '44400044400', 'lucas@email.com.br', 100);

console.log(lucas)