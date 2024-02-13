const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numeros = [...numerosImpares, ...numerosPares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone ={
    ...pessoa,
    telefone: 1231231
}

const {nome} = pessoa
//console.log(nome)

function imprimeDados({nome, idade}){
    console.log(nome,idade)
}
imprimeDados(pessoa)