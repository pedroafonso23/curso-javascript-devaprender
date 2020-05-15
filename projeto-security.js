function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value
    ConvidadosCristian = ['Pedro', 'Carol', 'Balu']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'You are allowed to enter!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'You are NOT allowed to enter'
    }
}