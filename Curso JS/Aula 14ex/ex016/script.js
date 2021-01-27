function contar(){
  let ini = document.getElementById('txti')
  let pas = document.getElementById('txtp')
  let fim = document.getElementById('txtf')
  let res = document.getElementById('res')
  if(ini.value.length == 0 || pas.value.length == 0 || fim.value.length == 0){//verifica se os campos estão vazios
    res.innerHTML = `Impossível contar!` 
    // alert('[ERRO] Preencha todos os campos')
  } else{
     res.innerHTML= 'Contando...<br>'
     let i = Number (ini.value)
     let p = Number (pas.value)
     let f = Number (fim.value)
    if (p <= 0){
        alert('[ERRO] Número invalido, vamos considera o PASSO 1')
        p = 1
    }
     if(i < f){
        //Contagem crescente
     for(let c = i;c <= f; c += p){
         res.innerHTML += `${c} \u{1F449}` // \u{xxx} para colocar um emoji na formatação JS 
     }
    }else{
        //contagem regressiva
     for(let c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
     }
    }
      res.innerHTML += `\u{1F3C1}`
  }
}