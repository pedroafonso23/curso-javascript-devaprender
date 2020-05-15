// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Nao divisivel por 3 e 5 => entrada

const resultado = fizzBuzz(15)
console.log(resultado)

function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 === 0) 
        return 'FizzBuzz'
    if (typeof entrada !== 'number')
        return 'Nao eh numero'
    if (entrada % 3 === 0) 
        return 'Fizz'
    if (entrada % 5 === 0) 
        return 'Buzz'
    return entrada    
}