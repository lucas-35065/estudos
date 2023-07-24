function primeiraLetraMaiuscula(str) {
    let palavras = str.split(' ');
    for (let i = 0; i < palavras.length; i++) {
      palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
    }
    return palavras.join(' ');
  }

  console.log (primeiraLetraMaiuscula("lucas rodrigues ribeiro"));
