let array = []
let valor

for(let i = 0; i < 3; i++){
    valor = window.prompt('Por favor, introduzca un valor')
    array[i] = valor
}

if (array[0] > array[1] && array[1] < array[2]) {
    console.log(`${array[1]} es más pequeño que ${array[0]} y ${array[2]}`)
}

else if (array[1] > array[0] && array[0] < array[2]) {
    console.log(`${array[0]} es más pequeño que ${array[1]} y ${array[2]}`)
}

else if (array[0] > array[2] && array[2] < array[1]) {
    console.log(`${array[2]} es más pequeño que ${array[0]} y ${array[1]}`)
}


