let array = []
let valor = 0

for (let i = 0; i < 20; i++) {
    array[i] = (Math.floor(Math.random() * (35 - 18 + 1) + 18))    
}

console.log(array)


for (let i = 0; i < array.length; i++) {
    valor += array[i]
}

console.log(valor/array.length)


//Este lo saqué después de ver la explicación del Ej-07








