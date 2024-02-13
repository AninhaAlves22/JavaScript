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
}]

cliente.enderecos.push({
    rua: 'R.384',
    numero:101,
    apartamento: false,
})

console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter((endereco)=>endereco.apartamento===true)

console.log(listaApenasApartamentos)