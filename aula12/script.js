/*function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.scr = 'fotomanha'
    } else if (hora >= 12 && hora <= 18)
        //Boa tarde
        img.scr = 'fototarde.png'
}   else {
    // Boa noite
    img.scr = 'fotonoite.png'
}   */
function carregar() { 
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem') 
    var data = new Date() 
    var hora = data.getHours() 
    
    msg.innerHTML = `Agora são ${hora} horas.` 
    
    if (hora >= 0 && hora < 12) { 
        // Bom dia 
        img.src = 'modelo/fotomanha.png' // Adicionado "modelo/"

    } else if (hora >= 12 && hora <= 18) { 
        // Boa tarde 
        img.src = 'modelo/fototarde.png' // Adicionado "modelo/"

    } else { 
        // Boa noite 
        img.src = 'modelo/fotonoite.png' // Adicionado "modelo/"
        
    } 
}


