// Natureza dinamica dos objetos
const mouse = {
    cor : 'red',
    marca : 'dazz'
}

mouse.velo = 5000
mouse.trocarDPI = function() {
    console.log('Mudando DPI')
}
// delete mouse.velo
console.log(mouse)