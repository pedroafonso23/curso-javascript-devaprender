// Somar somente multiplos de 3 e 5

somaLouca(10)

function somaLouca(limite) {
    let multiplos3 = 0
    let multiplos5 = 0
    for(i = 0; i <= limite; i++) {
        if (i % 3 === 0)
            multiplos3 += i
        if (i % 5 === 0)
            multiplos5 += i
    }
    console.log(multiplos3 + multiplos5)
}