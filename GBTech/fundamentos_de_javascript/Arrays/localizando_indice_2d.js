const endividados = ['Lucas', 'Dora', 'Bianca'];

const valorDaDivida = ['R$4.000,00', 'R$100.000,00', 'R$5.000,00'];

let endividadosEValorDaDivida = [endividados, valorDaDivida];

//includes -> vai informar um valor booleano
//indexOf -> vai passar o número do indíce em que aquele elemento se encontra

const exibeNomeDivida = (nomeDoEndividado) => {
    if (endividadosEValorDaDivida[0].includes(nomeDoEndividado)){
        let indice = endividadosEValorDaDivida[0].indexOf(nomeDoEndividado);
        return `${endividadosEValorDaDivida[0][indice]}, sua dívida nesta instituição é de ${endividadosEValorDaDivida[1][indice]}.`;
    } else if (nomeDoEndividado == 'Nemo') {
        return `Uau, parece que você encontrou o Nemo!`;
    } else {
        return `Você não tem dívidas com esta instituição! =)`;
    }
}

console.log(exibeNomeDivida('Dora'));