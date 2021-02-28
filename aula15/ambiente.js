num.push(1) // insere um valor no array
num.sort() // organiza em ordem crescente
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}, ele esta no indice 0 do ARRAY`)
let pos = num.indexOf(4) // indexOF() busca um valor no array
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}