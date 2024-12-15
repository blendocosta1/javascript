let num = [3,8,4,6,2,1,9,]
num.sort()
/*
let c = 0

while(c <= num.length) {
    console.log(`O numero ${num[c]} esta na ${c} posição do vetor`)
    c++
}
console.log(`O vetor tem ${num.length} posições`)
console.log('Usei a estrutura de repetição "while"')


do {
    console.log(`O número ${num[c]} está na ${c}° posição do vetor`)
    c = c + 1
} while(c < num.length)
    console.log(`O vetor tem ${num.length}° Posições`)

    console.log('Usei a estrutura de repetição "do while"')


for (let c = 0; c <= num.length; c++) {
    console.log(`O número ${num[c]} está na posição ${c} do vetor`)
}
console.log(`O vetor tem ${num.length} posições <br> Utilizei a estrutura de repetição "for"`)
console.log(`Agora o vetor sera organizado em ordem crescente...`)
*/

    for (let pos in num) { 
        console.log(`O número ${num[pos]} está na ${pos}° posição do vetor`)
    }
