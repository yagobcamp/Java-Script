function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`) 
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert (`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fses = document.getElementByName('radsex')[0]
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute(`id,` `foto`)
        if (fsex[0].cheked) {
            genero = `Homem`
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        } else if (fsex[1].cheked) {
            genero = `Mulher`
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
