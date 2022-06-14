let array = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let valor
let array2 = array

do {
    valor = window.prompt('Por favor introduzca un número del 0 al 9')

    if (valor >= 0 && valor <= 9) {  
        array2[valor] = (array[valor])*2
}

}while(valor >= 0 && valor <= 9);
    
console.log(`El array queda ahora así ${array}`)