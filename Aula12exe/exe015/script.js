//const { get } = require("express/lib/response")

function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var formulano = document.getElementById('txtano')
    var res = document.getElementById('res') //OU PODE USAR: var res = document.querySelector('div#res')
    if (formulano.value.length == 0 || Number(formulano.value) > ano) {  
        window.alert('[ERRO] Verifique os dados e tente novamente!')      
    } else {    

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formulano.value)  //res.innerHTML = ` Idade calculada ${idade}` = aqui é para testar e ver se ta funcionando       
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotobebeM.png')
                
            } else if (idade < 21) { //OU PODE SER ASSIM: else if(idade >= 10 && idade < 21)
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.jpg')
                //Adulto
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if(idade >= 10 && idade < 21) {
                //Jovem
            } else if(idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}