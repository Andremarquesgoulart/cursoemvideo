
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} cadastrado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou ja encontrado na lista!')
    }

    num.value = ''
    num.focus()
    
}

function finalizar() {
    if (valores.length == 0) {
        alert('Sem valores em lista não é possivel finalizar a operação!')
    } else {
        let tot = valores.length
        let maior = [0]
        let menor = [1]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
            media = soma / tot
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Temos ao todo ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor encontrado é: ${menor}</p>`
        res.innerHTML += `<p>O maior valor encontrado é: ${maior}</p>`
        res.innerHTML += `<p>A soma entre os valores é: ${soma}</p>`
        res.innerHTML += `<p>A media entre os valores é: ${media}</p>`
    }
}
