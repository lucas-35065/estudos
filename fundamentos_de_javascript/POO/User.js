export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }
     
      get sobrenome() {
        return this.#sobrenome
    }
    
    get email () {
        return this.#email
    }
    
    get nascimento () {
        return this.#nascimento
    }

    get role () {
        return this.#role
    }
    
    get ativo () {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === '') {
          throw new Error('formato não válido')
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
    }

    exibirInfos () {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}


// npm init -y (package json) depois da description inserir type: "module"c
// utilizar # serve para tornar alguma coisa da classe privada e não podendo ser alterada por outra parte, que não onde a classe foi declarada

// abaixo exemplo de objeto que pode ser privado
// #montaObjUser (){
//     return ({
//     nome: this.#nome,
//     email: this.#email,
//     nascimento: this.#nascimento,
//     role: this.#role,
//     ativo: this.#ativo
//     })
// }

// o método de GET serve para termos somente algumas partes do código expostas, só o que é necessário. A função get deve ser inicializada sem o (). Somente leitura. 

//o metodo setter serve para alterarmos alguma propriedade, só aceita um parametro. É acessado como uma propriedade ao invés de uma função

//o polimorfismo é o comportamento interno de um método ser diferente, mas com a assinatura igual, por exemplo: a função exibirInfos existe em todos os usuárias desse projeto, entretando, eu poderia mudar o que é exibido em cada uma, mas mantendo o nome da função. 