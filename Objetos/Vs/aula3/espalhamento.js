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


function ligarParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligarParaCliente(...cliente.telefone)

const encomenda={
    destinatario:'João',
    ...cliente.enderecos[0]
}

console.log(encomenda)