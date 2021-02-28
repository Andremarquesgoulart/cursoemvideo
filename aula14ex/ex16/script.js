function calcular() {

    var inic = window.document.getElementById('inic')
    var fim = document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(inic.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    // VALIDAÇÃO DOS CAMPOS
    if (i <= 0 ) {
        res.innerHTML = `Valor inválido para o campo INÍCIO!`
    } else if (f <= 0) {
        res.innerHTML = 'Valor inválido para o campo FIM!'
    } else if (p <= 0) {
        res.innerHTML = 'Valor inválido para o campo PASSO!'
    } else {
        for(var c = i; c <= f; c += p){
            res.innerHTML += `&#128073 ${c}`
        } for (var c = i; c >= f; c -= p) {
            res.innerHTML += `&#128073 ${c}`
        }
        res.innerHTML += ' 🏁'
    }

    
}




    