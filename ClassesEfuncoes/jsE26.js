const Livro = function(nome, editora, paginas){
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function(){
        return gNome
    }
    this.getEditora = function(){
        return gEditora
    }
    this.getPaginas = function(){
        return gPaginas
    }
}

const GraphQL = new Livro("GraphQl", "Casa do código", 143)

console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())