var idade = 15

if (idade < 16) {
    console.log('Você ainda não pode votar!')
} else {
    if (idade >= 18 && idade <= 70) {
        console.log('Seu voto é Obrigatório!')
    } else {
        console.log('Seu voto é opcional!')
    }
}