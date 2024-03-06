//Crear un array vacio
let Nada = [];
//crear un array con elementos:
let frutas =["Manzana","Banano","Naranja"];
//crear un array con elementos de diferentes tipos de datos
let DiferentesTipos = [1, 'dos', true, { nombre: 'Juan' }];
//crear un array utilizando el constructor array
let arrayConstructor = new Array(3);
//crear un array con una secuencia numerica usando el metodo
let secuenciaNumerica = Array.from({ length: 5 }, (_, index) => index + 1);
//crear un array mediante la repeticion de un valor utilizando el metodo Arrayfill()
let arrayRepetido = Array(5).fill('a');
//crear un array a partir de una cadena de texto usando el metodo string.slit()
let cadena = 'Hola, cómo estás';
let arrayDesdeCadena = cadena.split(' ');
//crear un array combinando dos arrays existentes utilizando el operaodr spread
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = [...array1, ...array2];
//Crear un array con valores únicos utilizando el método Set() y el operador spread()
let arrayConValoresRepetidos = [1, 2, 2, 3, 3, 4, 5];
let arrayUnico = [...new Set(arrayConValoresRepetidos)];
//crear un array con una funcion que genere valores dinamicamente
function ArrayDinamico(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(Math.random());
    }
    return array;
  }
    let arrayDinamico = ArrayDinamico(5);
//METODOS BASICOS DE ARRAYS
    //obtener la longitud de un array
    const array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5
//Agregar elementos al final del array usando push
array.push(6);
console.log(array); // Output: [1, 2, 3, 4, 5, 6]
//Eliminar el último elemento del array usando
array.pop();
console.log(array); // Output: [1, 2, 3, 4, 5]
// Agregar elementos al principio del array usando ubshift
array.unshift(0);
console.log(array); // Output: [0, 1, 2, 3, 4, 5]
//Eliminar el primer elemento del array usando shift
array.shift();
console.log(array); // Output: [1, 2, 3, 4, 5]