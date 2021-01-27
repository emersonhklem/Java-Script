function verificar(){
    var data = new Date()
    var ano= data.getFullYear() // recebe ano com 4 digitos
    var fano= window.document.getElementById('txtano')
    var res= window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number (fano.value) > ano){// fano.value.lenght verifica se os dados estão preenchidos 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
      var fsex= window.document.getElementsByName('radsex')
      var idade = ano - Number (fano.value) 
      var genero =''
      var img = document.createElement('img') //cria a variável img e elemento
      img.setAttribute('id', 'foto') // function da img

      if(fsex[0].checked){ //verifica se a caixa masculin está preenchida
          genero = 'Homem'
             if (idade >=0 && idade <= 10){
                 //Criança
                img.setAttribute ('src', 'bebe-h.png')// variavel img recebe a foto bebe-h
             } else if( idade < 21){
                 //Jovem
                 img.setAttribute('src', 'jovem-h.png')
             } else if (idade < 50){
                 //adulto
                 img.setAttribute('src', 'adulto-h.png')
             } else {
                 //idoso
                 img.setAttribute('src', 'idoso-h.png')
             }
      } else if (fsex[1].checked){
          genero = 'Mulher'
             if (idade >=0 && idade <= 10){
              //Criança
              img.setAttribute ('src', 'bebe-m.png')
             } else if( idade < 21){
             //Jovem
             img.setAttribute('src', 'jovem-m.png')
             } else if (idade < 50){
             //adulto
             img.setAttribute('src', 'adulto-m.png')
             } else {
             //idoso
             img.setAttribute('src', 'idoso-m.png')
             }
            }
     }
    res.style.textAlign = 'center' //alinha o texto 
    if ( fano.value.length && fsex[0].checked || fsex[1].checked){ // só aparece a mensagem da proxima linha se os dados estiverem preenchidos, se não estiver mantém a mensagem anterior
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    }
    res.appendChild(img) // manda a imagem pro navegador
}