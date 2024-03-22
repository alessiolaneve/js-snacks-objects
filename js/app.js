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
console.log(animali)

const animaliMam = []
// - recuperare classe
// - verificare classe = mammiferi
// - pushare obj in nuovo array 

for (let i = 0; i < animali.lenght; i++) {
    const mamClass = animali[i]
    console.log(mamClass)
}