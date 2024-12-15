function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    // Verifica se os cmapos estão preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO!] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) { // Verifica se o passo é válido
            window.alert(  'Passo inválido! Considerando passo = 1')
            p = 1
        }

        // Contagem crescente
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { 
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}