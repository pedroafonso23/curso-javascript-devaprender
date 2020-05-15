// Simular filtro de faixa de preco do MercadoLivre

// Primeira opcao

let faixas = [
    {tooltip : 'up to $700', min : 0, max : 700},
    {tooltip : 'up to $1000', min : 700, max : 1000},
    {tooltip : '$1000 or more', min : 1000, max : 999999}
]

// Segunda opcao (Factory Function)
function criarFaixa(tooltip, min, max) {
    return {
        tooltip,
        min,
        max
    }
}

let faixas2 = [
    criarFaixa('a', 1, 100),
    criarFaixa('b', 100, 1000),
    criarFaixa('c', 1000, 10000)
]

let faixas3 = [
    criarFaixa('d', 10, 20),
    criarFaixa('r', 20, 30),
    criarFaixa('g', 30, 40)
]

// Terceira opcao (Constructor Function)
function FaixaPeco(tooltip, min, max) {
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

console.log(faixas)
console.log(faixas2)
console.log(faixas3)