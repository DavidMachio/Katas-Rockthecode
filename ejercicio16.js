//Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

//Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

const valores = (array) => {
    for (const word of array) {
        console.log(word.length)
    }
}

valores(placesToTravel)