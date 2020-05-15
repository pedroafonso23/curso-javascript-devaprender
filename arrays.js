// Add novos elementos
const num = [1, 1, 2, 3]

num.unshift(0)
console.log(num)

num.splice(1, 0, 'a')
console.log(num)

num.push(55)
console.log(num)

// Encontrar elementos
console.log(num.indexOf(2))
console.log(num.indexOf('2'))
console.log(num.indexOf(100))
console.log(num.lastIndexOf(1))
console.log(num.indexOf(2) !== -1) // Verificar se existe 
console.log(num.includes(2))    // Verificar se existe (forma nova)

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
]

const marca = marcas.find(function(marca){
    return marca.nome === 'a'
})

console.log(marca)

// Remover
console.log(num.pop())
console.log(num.shift())
console.log(num.splice(2, 1))
console.log(num)

num.length = 0 // Apagando todo o array
num.splice(0, num.length) // Apagando todo o array
console.log(num)

// Dividir elementos
// Dividir arrays
// Combinar arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const combinado = array1.concat(array2)
console.log(combinado)

const cortado = combinado.slice(1, 3)
console.log(cortado)

// Nova forma de clonar arrays no ES6 com o operador spread...
const combinado2 = [...array1, ...array2]
console.log(combinado2)

const clonado = [...combinado]
console.log(clonado)

// Iterando array
const vetor = [1, 2, 3, 4, 5]

vetor.forEach((numero, indice) => console.log(numero, indice))

// Combinar arrays
const combinado3 = vetor.join('.')
console.log(combinado3)

const frase = 'ola bem vindo ao curso'
const result = frase.split(' ')
console.log(result)

console.log(result.join('-'))