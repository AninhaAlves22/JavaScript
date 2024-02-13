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

const chavesDoObjeto = Object.keys(cliente)
if(!chavesDoObjeto.includes('enderecos')){
    console.log('Erro. É necessário conter um endereço')
}
