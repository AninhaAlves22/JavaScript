const listaLivros = [
    {
        titulo:"GO",
        preco:45,
    },
    {
        titulo:"C++",
        preco:35,
    },
    {
        titulo:"Java",
        preco:30,
    },
    {
        titulo:"PHP",
        preco:15,
    },
    {
        titulo:"Elixir",
        preco:50,
    },
    {
        titulo:"Rust",
        preco:22,
    },
    {
        titulo:"Scala",
        preco:40,
    },
    {
        titulo:"Ruby",
        preco:28,
    },
    {
        titulo:"JavaScript",
        preco:25,
    },
    {
        titulo:"C#",
        preco:33,
    },
    {
        titulo:"Python",
        preco:20,
    },
]


function quickSort(array, esquerda, direita){
    let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda<indiceAtual-1){
            quickSort(array, esquerda, indiceAtual-1);

        }
        if(indiceAtual<direita){
            quickSort(array, indiceAtual, direita)
        }
    
    return array;
}


function particiona(array, esquerda, direita){
    let pivo = array[Math.floor((esquerda+direita)/2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++;
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita--;
        }

        if(atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

function trocaLugar(array, de, para){
    const elem1 = array[de];
    const elem2 = array[para];

    array[de] = elem2;
    array[para] = elem1;
}

console.log(quickSort(listaLivros, 0, listaLivros.length-1))