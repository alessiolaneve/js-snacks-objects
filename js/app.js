//JSNACK 3
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

const animali = [
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gatto', famiglia: 'felini', classe: 'mammiferi' },
    { nome: 'topo', famiglia: 'muridi', classe: 'mammiferi' },
    { nome: 'ragno', famiglia: 'aracnidi', classe: 'artropodi' },
    { nome: 'criceto', famiglia: 'cricetidi', classe: 'roditori' },
]
const animaliMam = []
console.log(animali, animaliMam)
// - recuperare classe
// - verificare classe = mammiferi
// - pushare obj in nuovo array 

for (let i = 0; i < animali.length; i++) {
    const animals = animali[i];
    console.log(animals)
    const animalsClass = animals.classe
    console.log(animalsClass)
    const mammiferi = animaliMam
    console.log(mammiferi)

    if (animalsClass === "mammiferi") {
        mammiferi.push(animals)
    }
}


// JSNACK 4
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [
    { nome: 'Paolo', cognome: 'Rossi', eta: 32 },
    { nome: 'Marco', cognome: 'Gialli', eta: 20 },
    { nome: 'Anita', cognome: 'Verdi', eta: 14 },
    { nome: 'Max', cognome: 'Bianchi', eta: 15 },
    { nome: 'Wendy', cognome: 'White', eta: 18 },
]
console.log(persone)
const adulti = []
const minorenni = []

for (let i = 0; i < persone.length; i++) {
    const people = persone[i];
    console.log(people)

    if (people.eta >= 18) {
        adulti.push(people.nome + ' ' + people.cognome + ' può guidare in quanto maggiore di 18 anni.')
    } else {
        minorenni.push(people.nome + ' ' + people.cognome + ' non può guidare in quanto minore di 18 anni')
    }
}
console.log(adulti)
console.log(minorenni)

// JSNACK 2 (BONUS)
// A partire da un array di stringhe, crea un secondo array formattando le
// stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const nomi = ['pippo', 'PLUTO', 'Paperino']
const nomiMaiusc = []

for (let i = 0; i < nomi.length; i++) {
     const name = nomi[i].toLowerCase();
     nomiMaiusc.push(name.charAt(0).toUpperCase() + name.slice(1));
}
console.log(nomiMaiusc);