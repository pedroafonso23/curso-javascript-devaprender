const filme = {
    titulo: 'Avengers',
    ano: 2010,
    diretor: 'Peter',
    personagem: 'Iron Man'
}

exibirPorps(filme)

function exibirPorps(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}