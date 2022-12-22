// es un comentarios en una sola linea 

/* mas de 
una linea  */


// Variables

//var numeros //esto esta bien, simepre minuscula, no usar guieon bajo

//var guardaNumeros // se pueda usar segunda palabra en mayuscula

//var guardo_numero // esto tambien esta permitido

//let palabra // cumple la misma funcion como el Var (Var = varaible)

//const numeroDePi = 3.1416// const es para usar constante

/* numericos -66654 ..... , reales 
cadeba de caracteres /string) "hola mundo"
valores logicos (true y false) (1 y 0) */

//var numero = 96  // no se coloca ; 

//let palabras = 'pedro' // se puede usar una comilla ' o " pero siempre debe ser la misma al inicio y el final

// el profe recomienda usar simepre let

//const numeroDePi= 3.1416 //seoarador decimal es el punto

//let esNuevo =  true


//let numero = 63

//let nuevoNumero = 0

//nuevoNumero = numero // se asigna el valor de numero a la variable nuevoNumero

// esto es para ver el valor de la variable que colocamos dentro de log
//console.log('este es el valor', nuevoNumero) 

// tamplet string
//let nombre = 'juan pedro'
//let edad = 36
//console.log(`tu nombre es ${nombre} y tu edad es ${edad} `) // alt 96  

// entrada de datos por teclado

//let guardoNombre = prompt('ingrese su nombre') // esta es mala practica el prompt miguel
// 


//let guardoEdad = prompt('ingrese edadluis')

//let numero1 = 0
//console.log(typeof (numero1)) //typeof es para saber que tipo de variable es

//let numero1 = prompt('ingrese su numero 1')
//console.log(typeof (numero1)) //typeof es para saber que tipo de variable es

//let numero2 = prompt('ingrese su numero 2')
// 


//let resultadoMulti = numero1 * numero2

//console.log(resultadoMulti)

//let resultadoDivi = numero1 / numero2

//console.log(resultadoDivi)

//let resultadoDiviresto = numero1 % numero2  // % dice que haga una division y que me muestre el "resto" de la division 

//
//let resultadosuma = numero1 + numero2 // el simpobolo de concatenar es el sgno + // esto muestra los dos numeros no al lado del otro 
//console.log(resultadosuma)

//5
//let numero1 = parseInt(prompt('ingrese su numero 1'))
//console.log(typeof (numero1))
//let numero2 = parseInt(prompt('ingrese su numero 2'))
//console.log(typeof (numero2))
//let resultadosuma = numero1 + numero2 // el simpobolo de concatenar es el sgno + // esto muestra los dos numeros no al lado del otro 

//console.log(resultadosuma)

// estructura condicional simple 

//let nota= parseInt(prompt('ingrese nota'))

//if (nota >=5) {
  //  console.log('aprobo la materia')
//}    // una condicion tiene 3 elementos 1 variable, 1 operacopne relaciones (< mayor, < ,<= menor igual,>=, != distinto, == igual igual, === estrictamente igual )


// condicional compuesto

//let nota= parseInt(prompt('ingrese nota'))

//if (nota >=5) {
  //  console.log('aprobo la materia')
//} else{console.log('no aprobo la materia')
//}

// operador ternario // mucho muy importante se usa cuando tengo if+else
/* let notaAprobada=56


let nota = parseInt(prompt('ingrese nota'))
not a >= notaAprobada ? console.log('aprobo la materia') : console.log('no aprobo la materia')*/

// 21/12/2022

/* let avanzar = true

if (avanzar==true){     // en este caso se pued omitir true 
    console.log('puede avanzar')
} else {
  console.log(''No puede avanzar')
} */

// estructura condicional anidada 

/* let nota1= parseInt(prompt('Ingres la primera nota'))
let nota2= parseInt(prompt('Ingres la segunda nota'))
let nota3= parseInt(prompt('Ingres la tercera nota'))


let resultado = (nota1+nota2+nota3)/3


if (resultado >=7){
  console.log('Aprobado')
} else{
     if(resultado >=4){
       console.log('Regular')
     }else{
        console.log('Desaprobado')
       }
     }  */

// operadores logicos y && (es para vinvular 2 o mas condiciones que deben ser verdaderas)

/* let nota1= parseInt(prompt('Ingres la primera nota'))
let nota2= parseInt(prompt('Ingres la segunda nota'))
let nota3= parseInt(prompt('Ingres la tercera nota'))

// logica cual es la mayor nota

if(nota1>nota2 && nota1>nota3){
  console.log('la nota 1 es la mayor')
}else{
  if(nota2>nota1 && nota2>nota3) {
    console.log('la nota 2 es la mayor')
  }else{
    console.log('la nota 3 es la mayor')
  }
} */


// OPERADOR CORTOCIRCUITO O CIRCUITO CORTO
/* 
let avanzar=true   // el operdar "o" es el ||
 
  avanzar && console.log('podes avanzar')

 */
// operador logico o ||

/* let dia= parseInt(prompt('Ingres dia'))
let mes= parseInt(prompt('Ingres mes'))
let anio= parseInt(prompt('Ingres anio'))

if (mes == 1 || mes == 2 || mes == 3) {
  console.log('primer trimestre')
} */


// EJERCICIO 1
let nombre = prompt('Ingrese nombre')
console.log('EJERCICIO NRO. 1')
console.log('El nombre ingresado es:', nombre)

// EJERCICIO 2

let edad = /*parseInt*/(prompt('ingrese edad:'))
console.log('EJERCICIO NRO. 2')
console.log('la edad ingresada es:', edad)

// EJERCICIO 3 

console.log('EJERCICIO NRO. 3')
let tieneHijos= true

if (tieneHijos = true){
    console.log('Tiene hijos')
}else{
    console.log('No tiene hijos')
}

// PRODRIAMOS PEDIR LA CANTIDAD DE HIJOS Y ANALIZARLA.

// EJERCICIO 4
console.log('EJERCICIO NRO. 4')
let salario=parseInt(prompt('Ingrese Salario Mensual:'))

salarioAnual = salario * 12

console.log('El salario Anual es:' , salarioAnual)

// EJERCICIO 5

console.log('EJERCICIO NRO. 5')
let edad1 = parseInt(prompt('Ingrese edad:'))

if (edad1 >= 18){
    console.log('Eres mayor de edad')
}else{
    console.log('Eres menor de edad')
}

// EJERCICIO 6

//Ejercicio 6

if (tieneHijos == true) {
  console.log('Tiene hijos')
} else {
  console.log('No tienes hijos')
}

//Ejercicio 7

let genero = prompt('Ingrese genero: hombre/mujer')

if (genero == 'hombre') {
  console.log('Eres hombre')
} else {
  if (genero == 'mujer') {
      console.log('Eres mujer')
  } else {
      console.log('otro genero')
  }
}

//Ejercicio 8

let ladoCuadrado = parseInt(prompt('Ingresar medida de un lado'))
let perimetro = ladoCuadrado*4
console.log(perimetro)

//Ejercicio 9

let numero = parseInt(prompt('Ingresar primer numero'))
let numero2 = parseInt(prompt('Ingresar segundo numero'))
let numero3 = parseInt(prompt('Ingresar tercer numero'))
let numero4 = parseInt(prompt('Ingresar cuarto numero'))

let respuesta = numero+numero2
console.log(respuesta)
let respuesta2 = numero3*numero4
console.log(respuesta2)

//Ejercicio 10

let numero = parseInt(prompt('Ingresar numero: 1 a 99'))
if(numero > 9){
  console.log("tiene 2 digitos")
}else{
  console.log("tiene 1 digitos")
}

//Ejercicio 11

let valor = parseInt(prompt('Ingrese un numero entero'))
if (valor > 0) {
  console.log('positivo')
} else {
  if (valor == 0) {
      console.log('cero')
  } else {
  console.log('Negativo')
  }
}

//Ejercicio 12

let edad = parseInt(prompt('Ingrese edad'))
let tienePermiso = prompt('Puede conducir: si/no')
if (edad >= 18 && tienePermiso == 'si') {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}

//Ejercicio 13

let tieneDinero = false
let tieneTarjeta = false
if (tieneDinero || tieneTarjeta) {
  console.log('Puedes pagar')
} else {
  console.log('No tienes suficiente dinero')
}

//Ejercicio 15

let dia = prompt("dia")
let mes = prompt("mes")
let anio = prompt("año")

if (dia == 25 && mes == 12){
  console.log("es navidad")
}