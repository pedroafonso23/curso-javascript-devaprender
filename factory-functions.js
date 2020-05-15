// Construindo um objeto unico

const celular0 = {
    marca : 'Motorola',
    tamTela : {
        vert : 155,
        hori : 75
    },
    bateria : 5000,
    ligar : function() {
        console.log('Fazendo ligacao...')
    }
}
console.log(celular0)

// Factory Functions: metodo que cria objetos

function criarCelular(marca, tamTela, bateria){
    return {
        marca,
        tamTela,
        bateria,
        ligar() {
            console.log('Fazendo ligacao...')
        }
    }
}

const celular1 = criarCelular('ZenFone', {vert:100, hori:50}, 5500)
console.log(celular1)

// Construtor Function: alternativa ao Factory Function
// Pascal Case - UmDoisTresQuatro
function Celular(marca, tamTela, bateria) {
    this.marca = marca,
    this.tamTela = tamTela,
    this.bateria = bateria,
    this.ligar = function() {
        console.log('Ligando...')
    }
}

const celular2 = new Celular('Asus', {vert:180, hori:85}, 4000)
console.log(celular2)

// Clonando objetos e adicionando valores

const novoObjeto = Object.assign({
    cor : 'yellow'
}, celular0)
console.log(novoObjeto)

// Outra opcao de clonar: spread

const novoObjeto2 = {cor:'yellow', ...celular0}
console.log(novoObjeto2)