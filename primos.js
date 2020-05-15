exibirNumPrimos(15)

function exibirNumPrimos(limite) {
    for(let num = 2; num <= limite; num++) {
       if(numPrimo(num)) console.log(num)
    }
}

function numPrimo(num) {
    for(let divisor = 2; divisor < num; divisor++) {
        if(num % divisor === 0) {
            return false
        }
    }
    return true
}