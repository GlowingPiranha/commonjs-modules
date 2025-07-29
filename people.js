// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const names = require('./modules/names.js');
const hobby = require('./modules/hobbies.js');


// console.log(names('giorgio', 'mastrota'));
// console.log(hobby('lettura', 'gaming', 'cucinare'));

const createProfile = () => {
  const person = names('Giorgio', 'Mastrota');
  const hobbies = hobby('lettura', 'gaming', 'cucinare');

  return {
    fullName: `${person.firstName} ${person.lastName}`,
    hobbies: hobbies
  }
}

console.log(createProfile());