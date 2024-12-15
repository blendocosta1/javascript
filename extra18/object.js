let ficha = {nome: 'Maik', idade:25, peso:67.2, altura:1.70, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

ficha.engordar(1)
console.log(`${ficha.nome} pesa ${ficha.peso}Kg`)

