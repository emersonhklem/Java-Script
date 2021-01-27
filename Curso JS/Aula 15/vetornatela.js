let valores = [4,8,3,7,5]
console.log(valores)

for(let pos = 0;pos <valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//o for de cima é o mesmo do for debaixo, o debaixo é simplificado e funciona da mesma forma
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}