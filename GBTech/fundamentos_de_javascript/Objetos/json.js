const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)

   const objLivro = JSON.parse(jsonLivro)
    console.log(objLivro)   

// JSON.parse(): converte JSON para um objeto JavaScript;
// JSON.stringify(): converte um objeto JavaScript para o formato JSON.