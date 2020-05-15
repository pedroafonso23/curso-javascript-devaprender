// Criar objeto endereco com:
// Rua, Cidade, CEP, exibirEnd(endereco)

let endereco = {
    rua : 'a',
    cidade : 'b',
    cep : '123'
}

function exibirEnd(endereco) {
    for (let chave in endereco) {
        console.log(chave, endereco, endereco[chave])
    }
}

exibirEnd(endereco)