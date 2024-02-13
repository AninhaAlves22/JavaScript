//usando arrow functions como no exemplo

const acesso = (nome)=>{
    console.log(`${nome} logou com sucesso no sistema!`)
}

const autentica = (cargo) =>{
    let array = []
    for(i=0;i<cargo;i++){
        array.push(i)
    }
    return true;
}

const login = (pessoa,) => {
    if(pessoa.cargo === 'funcionario'){
        autentica(90000)
    }else if(pessoa.cargo === 'diretoria'){
        autentica(900000)
        console.log(4)
    }
    return acesso(pessoa.nome)
}

login({cargo: 'diretoria',nome:'Leia'}, )

//function acesso(nome){
//    console.log(`${nome} logou com sucesso no sistema!`)
//}
//function autentica(cargo){
 //   let array = []
 //   for(i=0;i<cargo;i++){
 //       array.push(i)
 //   }
 //   return true;
//}
//function login(pessoa){
 //   if(pessoa.cargo === 'funcionario'){
 //       autentica(90000)
 //   }else if(pessoa.cargo === 'diretoria'){
  //      autentica(900000)
  //      console.log(2)
  //  }
  //  return acesso(pessoa.nome)

//}
//login({cargo: 'diretoria',nome:'Leia'}, autentica)


const numero = 256
const convertidoEmString = new String(numero)
console.log(convertidoEmString)