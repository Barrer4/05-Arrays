let meses = ['','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
let mes
do{
    mes = parseInt(window.prompt('Introduzca un número del 1 al 12 para saber el mes'))
   
} while(mes <= 0 || mes > 12);

console.log(meses[mes])