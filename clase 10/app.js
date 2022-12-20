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
let notaAprobada=5

let nota = parseInt(prompt('ingrese nota'))
nota >= notaAprobada ? console.log('aprobo la materia') : console.log('no aprobo la materia')
