const endividados = ['Lucas', 'Dora', 'Bianca'];

const valorDaDivida = ['R$4.000,00', 'R$100.000,00', 'R$5.000,00'];

let endividadosEValorDaDivida = [endividados, valorDaDivida];

console.log (`${endividadosEValorDaDivida [0][0]}, o valor da sua dívida é ${endividadosEValorDaDivida [1][0]}`);
console.log (`${endividadosEValorDaDivida [0][1]}, o valor da sua dívida é ${endividadosEValorDaDivida [1][1]}`);
console.log (`${endividadosEValorDaDivida [0][2]}, o valor da sua dívida é ${endividadosEValorDaDivida [1][2]}`);

//Caso seja uma lista com mais de 4 dimensões, considerar se não é viável não fazer esse método aninhado, porque a manutenção do código fica difícil.