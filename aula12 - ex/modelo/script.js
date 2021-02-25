function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementsByName('txtano')
    var res = document.getElementsByName('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    }
} 