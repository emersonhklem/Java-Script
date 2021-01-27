function carregar() {
var msg= window.document.getElementById ('msg')
var img= window.document.getElementById ('imagem')
var data= new Date()
var hora= data.getHours()
let b = window.document.getElementById ('bom')

msg.innerHTML= `Agora são ${hora} horas.`

   if(hora > 0 && hora < 12){
       //BOM DIA
       b.innerHTML = `Bom Dia!`
       img.src= 'manha.png' 
        document.body.style.background = '#e6d3ab'
        
   } else if (hora >= 12 && hora < 18) {
       //BOA TARDE!
        img.src= 'tarde.png'
        document.body.style.background = '#c03200'
        b.innerHTML = `Boa tarde!`
   } else{
       //BOA NOITE!!
        img.src= 'noite.png'
        document.body.style.background = '#31010a'
        b.innerHTML = `Boa Noite!`
   }
}
