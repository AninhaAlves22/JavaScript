const cliente = {
    nome: "João",
    idade: 24,
    email:"joao@firma.com",
    telefone: ["114555559", "1109823489234"]
};

cliente.enderecos=[{
    rua: 'r.208',
    numero: 1189,
    apartamento: true,
    complemento: 'ap 32'
}];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo!== "function"){
        console.log(`A chave ${chave} temo o valor ${cliente[chave]}`);
    }
}