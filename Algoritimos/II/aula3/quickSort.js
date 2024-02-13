const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita){
    let indiceAtual = particiona(array, esquerda, direita);
    console.log(`indice atual${indiceAtual}`)
    if (esquerda<indiceAtual-1){
        console.log('entrou no primeiro if')
        quickSort(array, esquerda, indiceAtual-1);

    }
    if(indiceAtual<direita){
        console.log('entrou no segundo if')
        quickSort(array, indiceAtual, direita)
    }
    
    return array;
}


function particiona(array, esquerda, direita){
    console.log('esquerda, direita', esquerda, direita)
    console.log('array', array);
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

console.log(quickSort(listaLivros, 0, listaLivros.length-1))