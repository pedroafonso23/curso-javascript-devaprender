let idade = 5
console.log(idade)
let altura = 1.75
console.log(altura)

// camelCase
let nomeCompleto = 'Pedro Afonso Costa Ferraz Leite'

idade = 10 // Let pode ser redefinido

const anoNascimento = 1989 // Nao pode ser redefinido
console.log(anoNascimento)

// Base variables
let nome = 'Pedro' // String literal
let salario = 5900 // Number literal (sem diferenca entre numeros inteiros e flutuantes)
let sexoMasculino = true // Boolean
let sobrenome // Undefined
let corSelecionada = null // Valor vazio, quando vc quer redefinir um valor

// Tipagem dinamica: JS descobre em tempo de execucao o tipo da variavel
console.log(typeof nome)
nome = 15 // Muda o tipo dinamicamente
console.log(typeof nome)

console.log(typeof sobrenome)

// Objetos: uma serie de key:value
let person = {
    name: 'Pedro',
    surname: 'Afonso',
    age: 30,
    sexMasculine: true,
}

console.log(person)
console.log(person.name)
console.log(person.sexMasculine)

// Arrays: conjunto de dados que podem ser acessados por um index
let familia = ['Pedro', 'Carol', 'Afonso', 'Heda', 'Wal', false, 23]

console.log(familia)
console.log(familia[1])
console.log(familia[5])
console.log(familia.length)

// Functions: fabrica que recebe, processa e retorna valores
// Nomear: verbo + substantivo

let corSite = 'azul'
function resetaCor(){
    corSite = ""
}

console.log(corSite)
resetaCor()
console.log(corSite)

corSite = 'vermelho'
function mudaCor(cor, ton){
    corSite = cor + ' ' + ton
}

console.log(corSite)
mudaCor("amarelo", "claro")
console.log(corSite)

// Function que realiza uma tarefa e nao retorna nada
function dizerNome(){
    console.log('Pedro')
}
dizerNome()

function multiplicarPorDois(valor){
    return valor * 2
}

let resultado = multiplicarPorDois(50)

console.log(resultado)

// Operadores aritimeticos
let grana = 100
console.log(salario + 45 - (2 * salario) / 0.90)

console.log(grana++)
console.log(grana)
console.log(--grana)

// Operadores de atribuicao
let torradeira = 25
torradeira += torradeira
console.log(torradeira)

// Operadores de igualdade
// Igualdade estrita
console.log(1 === 1) // Compara valor e tipo (recomendado sempre usar assim)
console.log('1' === 1)
console.log('1' == 1) // Igualdade solta, ignora o tipo

// Operador ternario
// Tem um cliente, se for 100 ou mais, cliente permium, menos eh tipo comum
let pontos = 100
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)

// Operadores logicos
console.log(true && true)
console.log(false && true)
console.log(false || true)
console.log(!true && true)

let maiorDeIdade = true
let cnh = true
let sexo = false
let podeAplicar = maiorDeIdade && cnh || !sexo
console.log(podeAplicar)

// Operadores bitwise
// Falsy: undefined, null, 0, false, '', NaN - Not a Number
// Truthy: 'qualquer coisa', qualquer numero exceto 0, true

let corPersonalizada = 'Vermelho'
let corPadrao = 'Azul'
let corPerfil = corPersonalizada && corPadrao

console.log(corPerfil)
corPadrao = ''
console.log(corPerfil)

// Trocar valores de variaveis
let a = 'red'
let b = 'blue'

let c = a
a = b
b = c

console.log(a)
console.log(b)

// Condicionais

// If ... Else
let hora = 14

if (hora < 12  && hora > 6) {
    console.log('Bom dia')
} else if (hora < 18  && hora > 12) {
    console.log('Bom tarde')
} else {
    console.log('Bom noite')
}

// Switch ... Case
let permissao

permissao = 'gerente'

switch (permissao) {
    case 'comum':
        console.log('usuario comum')
        break;

    case 'gerente':
        console.log('usuario gerente')
        break;

    case 'diretor':
        console.log('usuario diretor')
    break;

    default:
        console.log('usuario nao reconhecido')
        break;
}

// For Loop
for (let i = 0; i < 6; i++) {
    if (i % 2 !== 0) { // Imprimir so os impares
        console.log(i)
    }   
}

// While Loop
let x = 5

while (x >= 1) {
    if (x % 2 !== 0) {
        console.log(x)
    }   
    x--
}

// Do ... While Loop
i = 0

do {
    console.log('digitando ' + i)
    i++
} while (i < 3)

// For ... In Loop
for (let chave in person) {
    console.log(chave)
}

const colors = ['red', 'blue', 'black']

for (let indice in colors) {
    console.log(indice, colors[indice])
}

// For ... Of Loop
for (let cor of colors) {
    console.log(cor)
}

