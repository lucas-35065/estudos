import User from "./User.js";
 
export default class Docente extends User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, email, nascimento, role = 'docente', ativo = true) {
        super (nome, email, nascimento, role, ativo);
    }
    aprovaAluno (aluno, curso){
        return `${aluno}, você foi aprovado no curso: ${curso}`;
    }
}
