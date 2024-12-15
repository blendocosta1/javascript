function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}h</strong> e <strong>${min}</strong> minutos! <br>`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        msg.innerHTML += ' Bom dia!'
        document.body.style.background = '#FDEA9E'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        msg.innerHTML += ' Boa tarde!'
        document.body.style.background = '#82A0A2'
    } else if (hora == 18) {
        img.src = 'img/porsol.png'
        msg.innerHTML += ' Aprecie o Pôr do Sol!'
        document.body.style.background = '#B70C02'
    } else {
        img.src = 'img/noite.png'
        msg.innerHTML += ' Boa noite!'
        document.body.style.background = '#2D2F3B'
    }

}