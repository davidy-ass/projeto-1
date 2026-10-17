function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lengh == 0 || Number(fano.value) > ano) {
        window.alert('Verificar os seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calcula: ${idade}`
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        } else if (fsex[1].checked){
            genero = 'Mulher'
        }
        // res.style.texAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        }

}