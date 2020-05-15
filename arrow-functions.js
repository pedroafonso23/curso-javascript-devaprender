const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
]

const marca = marcas.find(marca => marca.nome === 'a')
console.log(marca)