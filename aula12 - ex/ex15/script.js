function verificar() {

    var data = new Date()
    var anoAtual = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var anoNasc = Number(fano.value)
    var idade = anoAtual - anoNasc
    var res = window.document.getElementById('res')
    if (anoNasc <= 0 || anoNasc > anoAtual) {
        res.innerHTML = `Digite os dados corretamente!`
    } else {
        var genero = ''
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')

        if(fsex[0].checked) {
            genero = 'homem'
            if (idade <= 3) {
                img.setAttribute('src', 'bbmasc.jpg')
                fase = 'bebê'
            } else if (idade <= 10) {
                fase = 'criança'
                img.setAttribute('src' , 'menino.jpg')
            } else if (idade <= 17) {
                fase = 'jovem'
                img.setAttribute('src' , 'adol_masc.jpg')
            } else if (idade <= 59) {
                fase = 'adulto'
                img.setAttribute('src','adulto_masc.jpg')
            } else {
                fase = 'idoso'
                img.setAttribute('src','idoso.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'mulher'
                if (idade <= 3) {
                    fase = 'bebê'
                    img.setAttribute('src','bbfem.jpg')
                } else if (idade <= 10) {
                    fase = 'criança'
                    img.setAttribute('src','menina.jpg')
                } else if (idade <= 17) {
                    fase = 'jovem'
                    img.setAttribute('src','adol_fem.jpg')
                } else if (idade <= 59) {
                    fase = 'adulta'
                    img.setAttribute('src','adulto_fem.jpg')
                } else {
                    fase = 'idosa'
                    img.setAttribute('src','idosa.jpg')
                }
        } 
    } 
    
    res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
    res.appendChild(img)

}