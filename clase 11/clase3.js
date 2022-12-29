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

// function calcularTabla(){
//     let resultado=0 // esto se genero para sacar el console.log
//     let i=1
//     let palabra=''
//     let valor=parseInt(prompt(`ingrese un valor para mostrar tabla de multiplicar`))
//     for(let i=1;i<=10; i=i+1){
//       resultado = i*valor
//     //console.log(`${valor}*${i} = ${resultado}`)// recordar q es solo para el programador es mala practica usarlo
//       palabra = palabra + `${valor} * ${i} = ${resultado}
//       `
//     }  
// //return resultado //esto es para sacar el console.log
// //return `${valor}*${i}=${resultado}`// return simpre va fuera de un ciclo
// return palabra
// }
// console.log(calcularTabla())

// Clase 14  28/12/22

// 3 partes
// primera parte
// function suma(){
//   console.log('hola mundo')
// }


// // segunda parte 2: declaracion de parametros 
// let nombre=prompt('Ingrese nombre') //

// suma(nombre) //
// ejemplo
// function multiplique(a,b){
//   let resultado = a*b
//   return resultado //siemrpe una funcion debe tener un return
//    }
   
//   let num1=prompt('Ingrese el primer numero') 
//   let num2=prompt('Ingrese el segundo numero') 

//   //let resultadomult=multiplique(num1,num2)
//   //console.log('el resultado de la funcion es', resultadomult)  // esto es para guardar el return en una variable y luego utilizarla fuera de la función
//    console.log(multiplique(num1,num2)) //

// Parte 3: retorno de un valor

// Ejercicio de java
console.log('Ejercico 1') 

for (let i=1; i <=10; i=i+1){
console.log(i)
}

console.log('Ejercico 2') 

for (let i=1; i <=10; i=i+1){
  numpar=i*2 
  console.log(numpar)
  }

console.log('Ejercico 3') 

for(i=1; i<=20; i=i=i+1){
  if(i%2!=0){
    console.log(i)
  }
}

console.log('Ejercico 4') 


for (let i=10; i >=1; i=i-1){
console.log(i)
}

console.log('Ejercico 5') 

for (let i=1; i <=10; i=i+1){
  if(i<=5){
  console.log(i)
  }
}

  console.log('Ejercico 6') 

for (let i=1; i <=10; i=i+1){
  if(i!=5){
  console.log(i)
  }
}

console.log('Ejercico 7') 
function decirNombre(a){
console.log("hola",a)
}
decirNombre("Ana")

console.log('Ejercico 8')

function saludar(a){
  let n = "Hola " + a
return n
}
console.log(saludar("Ana"))

console.log('Ejercico 9')
function sumar(a,b){
  let resultado = a+b
  return resultado
}
console.log(sumar(2,2))

console.log('Ejercico 10')
function restar(a,b){
  let resultado = a-b
  return resultado
}
console.log(restar(3,2))

console.log('Ejercico 11')

// function calcular(c,a,b){
//   if(c =="+") {
//   resultado = sumar(a+b)
//   return resultado}
//   else
//     if (c == "-"){
//       resultado = restar(a,b)
//       return resultado
//       }
//       else{
//       resultado = "null"
//       return resultado
//     }
//   }
// console.log(calcular("+",3,2))


// function calcular(operacion, a, b) {
//   if (operacion == "+") {
//       return sumar(a, b)
//   } else if (operacion == "-") {
//       return restar(a, b)
//   } else {
//       return "Tenés que ingresar un + o un -"
//   }
// }

// console.log(calcular("-", 10, 50))

console.log('Ejercico 13')

function contarHasta(numero){
for (i=1; i<=numero; i=i+1)
console.log(i)}
contarHasta(10)

console.log('Ejercico 13')

// function calcular(a,b,c){
//   let resultado = a $(c) b
//   return resultado
//   console.log("resultado")
// }

// let decida = prompt("desea usar la calcualdora? ingrese si o no")
// while (decida == "si"){
//  let num1= parseInt(prompt("ingres un numero"))  
//  let num2= parseInt(prompt("ingres otro numero")) 
//  let operacion = prompt ("ingrese una operacion")
//  calcular (num1,num,operacion)
// }

function calcular(a,b,c){
  let resultado = 'a $(c) b'
  return resultado
}
console.log(calcular(2,3,"*"))
