function parimpar(n){
    if(n%2==0){ //verifica se o resto da divisão de n por 2 é igual a zero
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}
// opção 1 de chamar a função e exibir
 let res = parimpar(4)
 console.log(res)
// opção 2 de chamar a função e exibir
console.log(parimpar(223))
