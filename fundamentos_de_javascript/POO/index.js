import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User ('Lucas', 'Rodrigues', 'lucas@l.com', '18/05/00');

const novoAdmin = new Admin ('Tania', 'Viel', 't@t.com', '01/01/1970');
console.log (novoAdmin.nome);
novoAdmin.nome = 'Tônia Viela';
console.log (novoAdmin.nome);
console.log (novoAdmin.sobrenome);

