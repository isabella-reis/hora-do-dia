function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date() 
    var hora = data.getHours() //pegando a hora local do PC;
    msg.innerHTML = `Agora são ${hora} horas !! :)`
    
    if (hora >= 0 && hora < 12) { //Bom dia!
        img.src = '.manha.jpg'
        document.body.style.background = '#a4b5c3'
    } else if (hora >= 12 && hora < 18) { //Boa tarde! :I
        img.src = '.tarde.jpg'
        document.body.style.background = '#c49e6e'
    } else { //Boa noite! :(
        img.src = '.noite.jpg'
        document.body.style.background = '#836184'
    }
}

