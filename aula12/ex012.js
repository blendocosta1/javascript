var agora = new Date()
var hora = 19
var seg = agora.getMinutes()
console.log(`São exatamente ${hora}h e ${seg} minutos`)

if (hora < 6) {
    console.log('Boa madruga!')
} else if (hora <= 11) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
