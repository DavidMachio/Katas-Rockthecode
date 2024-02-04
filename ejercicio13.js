//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:


  function buscarElemento(arr, word) {
    // Iterar sobre el array para buscar el elemento y su posición
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            // El elemento existe, devuelve true y la posición
            return { existe: true, posicion: i };
        }
    }
    // El elemento no existe, devuelve false
    return { existe: false };
}

// Ejemplo de uso:
const miArray = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Bruce',
    'Marc'
  ];
const valorABuscar = "Bruce";

const resultado = buscarElemento(miArray, valorABuscar);

if (resultado.existe) {
    console.log(`El elemento ${valorABuscar} existe en el array en la posición ${resultado.posicion}.`);
} else {
    console.log(`El elemento ${valorABuscar} no existe en el array.`);
}