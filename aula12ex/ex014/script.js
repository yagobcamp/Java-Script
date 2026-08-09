function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        // Bom dia
        img.src = 'modelo/fotomanha.png'
        document.body.style.background = '#f1e4c9'
    }  else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = 'modelo/fototarde.png'
    document.body.style.background = '#b38012'
} else {
    // Boa noite
    img.src = 'modelo/fotonoite.png'
    document.body.style.background = '#111b76'
}
}
