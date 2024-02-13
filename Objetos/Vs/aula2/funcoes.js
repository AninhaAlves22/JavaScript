const cliente = {
    nome: "João",
    idade: 24,
    email:"joao@firma.com",
    telefone: ["114555559", "1109823489234"],
    saldo:200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log('Saldo insuficente')
        }
        else{
            this.saldo-= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(100);

