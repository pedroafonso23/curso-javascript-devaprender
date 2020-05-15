// Funciton que exibe a quantidade de * em uma linha
exibirAst(10)

function exibirAst(linhas) {
    // let padrao = ''
    // for(let linha; linha <= linhas; linha++) {
    //     padrao += '*'
    //     console.log(padrao)
    // }
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = ''
        for(let i = 0; i < linha; i++) {
            padrao += '*'
        }
        console.log(padrao)
    }
}