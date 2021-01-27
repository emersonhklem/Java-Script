var agora= new Date()
var hora= agora.getHours()//variável para horas
console.log (`Agora são exatamente ${hora} horas.`)
if (hora <= 12){
    console.log (`Bom Dia!`)
} else if (hora <= 18){
    console.log (`Boa tarde!`)
} else {
    console.log (`Boa Noite!`)
}