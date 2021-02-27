let num = [5,8,9,2,3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}, ele esta no indice 0 do ARRAY`)
let pos = num.indexOf(5)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}