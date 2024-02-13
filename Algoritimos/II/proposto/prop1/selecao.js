const {folha, galho} = require('./propostoFolha');

lista = [];
const tamanho = folha.length+galho.length

let f=0;
let g=0;
for(let i =0;i<tamanho;i++){
    // console.log(`F = ${f}`)
    // console.log(`G = ${g}`)
    if((folha[f].preco<galho[g].preco)&&(!lista.inculdes(folha[f].titulo))){
        lista.push(folha[f]);
        if(f<4){
            f++;
        }
    }
    else if(galho[g].preco<folha[f].preco&&!lista.inculdes(galho[g].titulo)){
        lista.push(galho[g]);
        if(g<5){
            g++;
        }
    }
    if(galho.inculdes(galho[g.length-1])&&f<f.length-1){
        const sobra = (f.length-1)-f;
        for(let i=f;sobra;i++){
            lista.push(folha[i])
        }
    }
}
console.log(lista)