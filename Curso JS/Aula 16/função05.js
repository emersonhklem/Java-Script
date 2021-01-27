//RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))


/*
5! = 5 x 4 x 3 x 2 x 1 calculo do fatorial de um número
5! = 5 x 4! o fatorial de 5 é o mesmo que ele vezes o fatorial dele menos 1

n! = n x (n-1)! o fatorial de n é o mesmo que n vezes o fatorial dele menos 1
1! = 1 na matematica o fatorial de um é 1
*/