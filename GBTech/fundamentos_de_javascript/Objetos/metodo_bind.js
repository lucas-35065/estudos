const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

//não conseguiu pegar a gunção apresentar, por isso precisamos "colar";
   const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

   const personagemDefinido = personagemGenerico.bind(personagem)
   console.log(personagemDefinido())
   //a personagem é Princesa Leia

