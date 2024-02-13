// const typeCheck = (type) => {
//     const typeString = Reflect.apply(Object.prototype.toString, type, [])
//     return typeString.slice(typeString.indexOf(' ')+1,
//     typeString.indexOf(']')).toLowerCase()
// }

// const cloneArray = (element) =>{
//     const clonedArray = []
//     for (const item of element){
//         if (typeCheck(item)=='array'){
//             clonedArray.push(cloneArray(item))
//         }else{
//             clonedArray.push(item)
//         }
//     }
//     return clonedArray
// }

const objeto = {
    nome: "luisa",
    idade: 93,
    cidade: 'RP',
}

console.log(objeto["nome"])