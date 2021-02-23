/* 
 -- Condição Multipla SWICH - para valores fixos --
 -- Ele só suporta números e caracteres!
    Exp: case 1:
    Exp: case 'string': 
*/

var diaSo = new Date()
var dataAtual = diaSo.getDay()

switch(dataAtual) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda Feira')
        break
    case 2:
        console.log('Terça Feira')
        break
    case 3:
        console.log('Quarta Feira')
        break
    case 4:
        console.log('Quinta Feira')
        break
    case 5:
        console.log('Sexta Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
}
