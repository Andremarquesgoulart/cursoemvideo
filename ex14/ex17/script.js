function tabuada(){
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerText = ''
        for(var c = 1; c <= 10; c*n) {
            var item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${c*n}`
            item.value = `tab{c}`
            tab.appendChild(item)
            c++
        }
    }
}












































/*
function tabuada() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        // Criando tabuada
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab{c}`
            tab.appendChild(item)
            c++
        }
    } 
    
}
*/