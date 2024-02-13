// const numeros = [100, 200, 300, 400, 500, 600];

// // Primeira expressão: é executada apenas uma úncia vez
// // Segunda expressão: condição de execução
// // Terceiraa expressão: é executada sempre ao final do bloco


// for (let indice = 0; indice < numeros.length; indice++){
//     console.log(numeros[indice])
// }

const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0

for(let i=0;i<notas.length;i++){
    somaDasNotas+=notas[i];
}

const media = somaDasNotas/notas.length

console.log(`A média das notas é ${media}`)