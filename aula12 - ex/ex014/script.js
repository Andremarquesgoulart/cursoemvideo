function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    
    /* TESTE DE CONDIÇÃO */
    if (hora >= 0 && hora <12) {
        msg.innerHTML = `Bom Dia! Agora são ${hora} horas.`
        document.querySelector('h1').style.color= 'rgb(95, 95, 228)'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa Tarde! Agora são ${hora} horas.`
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'orange'
    } else if (hora <= 24) {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = 'img/noite.jpg'
        document.body.style.background = '#333'
    } else {
        msg.innerHTML = 'Hora Inválida!'
    }
}