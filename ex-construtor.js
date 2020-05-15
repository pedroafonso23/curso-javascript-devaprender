// Usar construtor para criar uma mensagem

function Postagem(titulo, msg, autor) {
    this.titulo = titulo,
    this.msg = msg,
    this.autor = autor,
    this.views = 0,
    this.comments = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a', 'b', 'c')
console.log(postagem)