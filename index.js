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