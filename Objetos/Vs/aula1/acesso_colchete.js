const cliente = {
    nome: 'Andre',
    idade : 32,
    cpf: '23432423425', 
    email: 'andre@dominio.com',
};

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave)=>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})