// estructura repetitiva while

// let x = 0
// while (x <= 10){
//  console.log(x)
//  x = x +1  // contador
// }

// concepto de acumulador

// let x = 1
// let suma = 0
// while( x<=5){
//     let valor=parseInt(prompt('ingrese un valor')) // lo que se crea dentro del while muere al salir del while
//     suma = suma+valor
//     console.log(valor)
//     x = x + 1
// }
// console.log(`el valor de la suma de los numeros ingresados ${suma}`)


// ciclo repetitivo for(cuando sabemos la cantidad de veces que queremos que algo serepita)
// for (inicializacion; condicion; incremento o decremento)
// for (let i=0; i<=10; i=i+1){
//     console.log(i)  // la primes vez se ejecuta la inicialización, luego evalua la condicion y luego el incremento

// }

// let suma=0

// for(let i=0; i<=9;i=i+1 ){
//     let valor= parseInt(prompt('ingrese un valor'))
//     if(i>=5){
//         suma=suma+valor
//         console.log(suma)
//         console.log(valor)
//     }
// }
// console.log(`la suma de los ultimos 5 valores da como resultado ${suma}`)
 //

 // funciones en 3 pasos

 // funciones declaraciones 
// quier que se muestre 3 veces ese mje Hola mundo


// mostrarMensaje()
// // funcion nombrada cuando se la llama antes de crearla
// function mostrarMensaje(){
//     console.log(`hola mundo`)
// }
//  mostrarMensaje() // asi se llama la función
//  mostrarMensaje() 
//  mostrarMensaje() 

// funcion que retorna un valor

function calcularTabla(){
    let resultado=0 // esto se genero para sacar el console.log
    let i=1
    let palabra=''
    let valor=parseInt(prompt(`ingrese un valor para mostrar tabla de multiplicar`))
    for(let i=1;i<=10; i=i+1){
      resultado = i*valor
    //console.log(`${valor}*${i} = ${resultado}`)// recordar q es solo para el programador es mala practica usarlo
      palabra = palabra + `${valor} * ${i} = ${resultado}
      `
    }  
//return resultado //esto es para sacar el console.log
//return `${valor}*${i}=${resultado}`// return simpre va fuera de un ciclo
return palabra
}
console.log(calcularTabla())