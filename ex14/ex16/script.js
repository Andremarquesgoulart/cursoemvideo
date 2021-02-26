function calcular() {
    var inic = window.document.getElementById('inicio')
    var fm = window.document.getElementById('fim')
    var pass = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var inicio = Number(inic.value)
    var fim = Number(fm.value)
    var passo = Number(pass.value)
    if (inicio == 0) {
        res.innerHTML = 'Impossível contar'
    } else if (fim == 0 || fim < inicio) {
        window.alert('Insira o valor correto!')
    } else if (passo <= 0) {
        window.alert('Passo inválido. Considerando PASSO 1.')
    } else {
        for( var c = inicio; passo <= fim; c += passo) {
            res.innerHTML += `Contando ${c}`
        }
       
    } 
    
    } 





    //res.innerHTML = `Inicio = ${inicio}, Fim = ${fim}, Passo = ${passo}. `
