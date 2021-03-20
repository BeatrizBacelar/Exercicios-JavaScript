function verificar(){
   let data = new Date()
   let ano = data.getFullYear()
   let fano = document.getElementById('txtano')
   let res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value)>ano){
       window.alert('[ERRO] verifique os dados novamente!')
   } else {
      let fsex = document.getElementsByName('radsex')
      let idade = ano - Number(fano.value)
      let genero = ''
      let img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked){
          genero = 'homem'
        if (idade>=0 && idade<10){
            //criança
            img.setAttribute('src', 'fotomenino.png')
        } else if (idade< 21){
            // jovem
            img.setAttribute('src', 'jovemhomem.png')
        } else if (idade < 60){
            // adulto
            img.setAttribute('src', 'adulto.png')
        } else {
            // idoso
            img.setAttribute('src', 'idoso.png')
        }

      } else if (fsex[1].checked){
          genero = 'Mulher'
          if (idade>=0 && idade<10){
            //criança
            img.setAttribute('src', 'fotomenina.png')
        } else if (idade< 21){
            // jovem
            img.setAttribute('src', 'jovemmulher.png')
        } else if (idade < 60){
            // adulta
            img.setAttribute('src', 'adulta.png')
        } else {
            // idosa
            img.setAttribute('src', 'idosa')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)

   }
}