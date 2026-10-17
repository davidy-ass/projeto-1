function carregar() {var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var Data = new Data()
var hora = Data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
    // Bom dia
    img.src = "fotos-dia/manha.png"
} else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = "fotos-dia/tarde.png"
} else {
    // Bom noite
    img.src = "foto-dia/manha.png"
}
}