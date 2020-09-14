//function saludar(nombre){
//    let nombre = nombre;
//   return 'Hola ' + nombre;
//}

// Mostrar el resultado por consola
//saludar('Alejandro');

function formarString () {

    return `Hola ${arguments[0]}`;
}
console.log ( formarString('Celeste'));

//flecha
const obtenerDatos = (argumento1, argumento2) =>{
    return 'Hola'
}

var obtenerDatos = Celeste 
console.log(obtenerDatos);

//function multiplicar(a, b){
//    const resultado = a + b;
//    return resultado;
//}

// Mostrar el resultado por consola
//multiplicar(3, 15)

const multiplicar = (a,b) => 3*15;

//function crearAlumno(nombre, apellido, edad, materias){
//    let alumno = {
//        nombre: nombre,
//        apellido: apellido,
//        edad: edad,
//        materias: materias
//    }

//    return alumno;
//}

// Mostrar el resultado por consola.
//crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés'])

function crearAlumno(nombre, apellido, edad, materias){
    return {
        nombre,
        apellido,
        edad,
        materias
    }
}
console.log (crearAlumno ('Leo', 'Messi', 32, ['TLPA', 'BaseDeDatos', 'Ingles']))

const obtenerDatos = (...args) => ( 
    { nombre: 'Leo', apellido: 'Messi', edad: '32', materias:['TLPA', 'BaseDeDatos', 'Ingles'] }
)
console.log (obtenerDatos('Leo', 'Messi', 32, ['TLPA', 'BaseDeDatos', 'Ingles']))

//function devolverFecha(){
//    return 'Hoy es ';
//}

// Mostrar el resultado por consola.
//devolverFecha('10','09','2020');
function devolverFecha(...args){
    return `Hoy es ${10},/${09},${2020}`;
}