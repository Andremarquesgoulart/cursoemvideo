/* Trabalhando condições aninhadas */

var agora = new Date()
var hora = agora.getHours() 

if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora < 24){
    console.log('Boa noite!')
} else {
    console.log('Boa Madrugada')
}