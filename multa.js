// Vel max 70km/h
// a cada 5km/h acima do limite, ganha 1 ponto
// caso ponto maior que 12, cnh suspendida
verifySpeed(130)

function verifySpeed(speed) {
    const maxSpeed = 70
    const kmPorPonto = 5
    const limiteSuspensao = 12
    if(speed <= maxSpeed)
        console.log('Ok')
    else {
        let pontos = Math.floor((speed - maxSpeed) / kmPorPonto)
        if(pontos >= limiteSuspensao)
            console.log('CNH suspensa')
        else
            console.log('Pontos ', pontos)
    }
}