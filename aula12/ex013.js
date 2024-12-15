var agora = new Date()
var diaS = agora.getDay()

switch(diaS) {
    case 0:
        console.log('AFS!! Já é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda-feira')
        break
    case 2:
        console.log('Hoje é Terça-feira')
        break
    case 3:
        console.log('Hoje é Quarta-feira')
        break
    case 4:
        console.log('Hoje é Quinta-feira')
        break
    case 5:
        console.log('UFA!!! Hoje é Sexta-feira')
        break
    case 6:
        console.log('EBA!! Hoje é Sábado')
        break
    default:
        console.log("[ERRO] Dia Inválido!")  
        break    
}