//Control de Flujo

//Control de flujo (if-else)

/**
 * Pasos para declarar ina estructura if-else
 * 
 * 1.palabras reservadas (if)
 * 2.establecer una coondicion ()
 * 3.delimitar el bloque que se ejecuta si ;a condicion se cumple
 * 
 */

// let n = 10; 
// //condicion que evalue si un numero 'n' es maoy que diez.
// if(n > 10){
//     console.log('El numero es mayor que diez')
// } else {
//     console.log('No es mayor a 10')
// }

//condicion que evalue que'n' es mayor a 10 y menor que 20
// let n = 15; 

// if(n>10 && n<20){
//     console.log('El numero es mayor a 10 y menor a 20')
// } else {
//     console.log('El numero no es mayor a 10 y menor a 20')
// }

// Si mi condicion es mayor a 10 y menor a 20
// Si mi concicion es mayor que 10 y mayor que 20
// Si mi nuemero es igual a 10
// Si mi numero es igual a 20
// Si mi numero no es mayor que 10 ni menor que 20

let n = 20;

if(n>10 && n<20){
    console.log('El numero es mayor a 10 y menor a 20')
} else if(n>20){
    console.log('El numero es mayor a 10 y mayor a 20')
} else if(n === 10){
    console.log('El numero es igual a 10')
} else if(n === 20){
    console.log('El numero es igual a 20')
} else {
    console.log('El numero no esta en el rango')
}

//Operador ternario

//Version compacta de If else

/**
 * Declaracion de un operador ternario
 * 
 * 1.Let para comenzar tu declaracion
 * 2.asignar un nombre
 * 3.asignar valor =
 * 4.establecer una condicion
 */
//Operador que nos permita evaluar si una calificacion es aprovativa o no

let calificacion = 7;

let evaluarCalificacion = calificacion >= 7 ? 'Aprobado': 'Reprobado';
console.log(evaluarCalificacion);

///////////////////////////////////////////////////////////

// switch 

/**
 * 1. Palabra reservada switch-case
 * 2. abrimos un parentesis (caso)
 * 3. abrir llavaes que delimitan mi bloque de mi codigo {}
 * 
 */

let color = 'Verde';

function adivinaColor(color){
switch(color.toLowerCase()){
    case 'rojo':
        console.log('Tu color es rojo')
    break;
    case 'verde':
        console.log('Tu color es verde')
    break;
    case 'azul':
        console.log('Tu color es azul')
    break;

    default:
        console.log('No conozco color ese azul')


}
}
///////////////////////////////////////////////////
function parImpar(numero){
    if(numero%2 === 0){
        console.log(`El numero ${numero} es par`)
    } else {
        console.log(`El numero ${numero} es impar`)
    }
}