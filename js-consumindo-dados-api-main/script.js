let mensagemErro = document.getElementById('erro');
mensagemErro.innerHTML = '';

async function consultaEndereco(cepCliente) {
    try {
        let consultaCep = await fetch (`https://viacep.com.br/ws/${cepCliente}/json/`);
        let consultaCepConvertida = await consultaCep.json ();
        if (consultaCepConvertida.erro) {
            throw Error ('CEP Inexistente')
        }
        let endereco = document.getElementById('endereco');
        let bairro = document.getElementById('bairro');
        let cidade = document.getElementById('cidade');
        let estado = document.getElementById('estado');

        endereco.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        cidade.value = consultaCepConvertida.localidade;
        estado.value = consultaCepConvertida.uf;

        console.log (consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `CEP inválido, tente novamente`
        console.log (erro)
    }
}

const cep = document.getElementById ('cep');
cep.addEventListener ('focusout', () => {
    consultaEndereco(cep.value)
})

