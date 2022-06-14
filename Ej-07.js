let array = []
let valor = 0


for (let i = 0; i < 10; i++) {
    let valor = Math.floor(Math.random() * 100)
    array[i] = valor
}
console.log(array)




// De aquí hacia abajo NO lo supe sacar

for (let i = 0; i < array.length; i++) {
    valor += array[i]

}

console.log(valor/array.length)



