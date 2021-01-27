function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('[ERRO] Por Favor, digite um número')
        
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            
            let item = document.createElement('option')// cria um option que é o espaço para a tabuada
            item.text = `${n} x ${c} = ${n*c}` // escreve a tabuada e faz o caluculo da tabuada
            item.value = `tab${c}`
            tab.appendChild(item)// exibe a tabuada
            c++ 
        }
    }
}