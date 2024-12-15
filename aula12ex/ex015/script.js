
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length != 4 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'menino7.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'moco15.png')
            } else if (idade < 41) {
                //adulto
                img.setAttribute('src', 'homem30.png')
            } else if (idade < 70) {
                //idoso
                img.setAttribute('src', 'homem60.png')
            } else {
                img.setAttribute('src', 'senhor80.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'menina7.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'moca15.png')
            } else if (idade < 41) {
                //adulto
                img.setAttribute('src', 'mulher30.png')
            } else if (idade < 70) {
                //idoso
                img.setAttribute('src', 'senhora60.png')
            } else {
                img.setAttribute('src', 'senhora80.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}