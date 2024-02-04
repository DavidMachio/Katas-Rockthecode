//Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
const dates = Object.keys(alien)
for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    console.log("The " + dates[i] + " is " + alien[date])
}

