var idade =45

console.log(`Você tem ${idade} anos.`)

if (idade <= 16 || idade >= 65) {
    console.log('Voto Opcional!')
} else if (idade >= 17 || idade < 64) {
    console.log('Voto Obrigatorio')
}