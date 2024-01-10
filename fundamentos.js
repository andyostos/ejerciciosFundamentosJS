//alert("200 ok");
//Funciones

/**
 * Declaración de funciones
 * 
 * 1.Palabras reservadas function.
 * 2.Asignar un nombre a nuestra función.
 * Colocar parentesis y después llaves.
 */

//Funcion sencilla sin parametros, no devuelve ningun valor.
function miFuncion(){
    console.log('Mi primera funcion');
}

//Funcion que salude a quien la mande a invocar.

function saludarUsuario(nombre){
    console.log("Hola " + nombre);

}

//función que realice la sume de 4 numeros diferentes.

function sumarNumeros(a, b, c, d){
    return `la suma de los numeros es: ${a+b+c+d}`;

}

/////////////////////////////////////////////////////

//funcion flecha  

/**
 *
 * 1.palabra reservada const
 * 2.asignar nombre
 * 3.agregar operador de asignacion = y los parametros()
 * 4. fat arrow => y llaves {} 
 */

const miFuncionFlecha = () => {console.log("Mi primera funcion" + " en JavaScript")}

const sumarNumeroFlecha = (e, g) => {e +g};