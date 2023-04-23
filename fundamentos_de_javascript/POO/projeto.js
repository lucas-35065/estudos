const user = {
    nome: 'Lucas',
    email: 'l@l.com',
    nasc: '18/05/2000',
    role: 'estudante',
    ativo: true,
    exibirInfos: function (){
        console.log(`O nome é ${this.nome} e o e-mail é ${this.email}`)
    }
}

const admin = {
    nome: 'Geovana',
    email: 'g@l.com',
    role: 'admin',
    criarCurso: function (){
        console.log('Curso criado!');
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();