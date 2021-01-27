let num = [5,8,4,2,6]
num.sort() //coloca os valores em ordem crescente
num.push(1) // adiciona o elemento 1 na ultima posição 
console.log(num) //exibe o vetor
console.log(`O vetor tem ${num.length} posições.`) // exibe quantas posições tem o vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // exibe o valor do primeiro espaço

let pos = num.indexOf(8) //procura o valor que está entre parenteses
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
console.log(`O valor 8 está na posição ${pos}`)
}