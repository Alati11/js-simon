// console.log("Simon");
// const timerElemet = document.querySelector('.timer');
// // console.log(timerElemet);   
// let numeriPc = getOfRandomFiveNumber(1, 100, 5);


// // - Visualizzare in pagina 5 numeri casuali (anche tramite alert).
// //     - creare 5 numeri in modo randomico; 
// document.getElementById("numeri-pc").innerHTML = numeriPc;

// function getOfRandomFiveNumber(minRange, maxRange, number) {
//     const pcArray = []

//     for (let i = 0; i < 5; i ++) {
//         // generare un numero random da rangeMin a rangeMAx
//         const n = getRandomInt(minRange, maxRange);
//         pcArray.push(n);
//         console.log(pcArray);
//         return pcArray;     
//     }
// }

// function getRandomInt( min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// - Parte un timer di 30 secondi. 
//  - avviare il timing di 30 secondi
// (durante il quale i numero non devono essere visibili all’utente)

// - Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//     - avviare il timing di 30 secondi
//     - inserire nuemri tramite prompt

// - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//     - confrontare i numeri inseriti dall'utente e quelli creati randomicamente
//     - stampare i numeri corrispondenti 


// genero i numeri e li mostro
const numbers = getRandomIntergers(1, 100, 5)
alert(numbers)

// parte il timer e dopo 30s chiedo i 5 numeri all'utente
setTimeout(() => {
    // console.log('chiedere i numeri al utente')
    const numeriUtente = []
    const numeriIndovinati = []

    for (let i = 0; i < 5; i++) {
        console.log('chiedo un numero', i + 1)

        const numero = parseInt(prompt('Inserisci uno dei numeri vincenti'))
        console.log(numero)

        numeriUtente.push(numero)
    
        if (numbers.includes(numero) && !numeriIndovinati.includes(numero)) {
            numeriIndovinati.push(numero)
        }
    }

    console.log(numeriIndovinati)

    alert(
        'hai indovinato ' +
        numeriIndovinati.length +
        ' numeri! ' +
        numeriIndovinati.join(', ')
    )
}, 3000)

function getRandomIntergers(min, max, num) {
    const numbers = []

    while (numbers.length < num) {
        n = getRandomIntInclusive(min, max)

        if (!numbers.includes(n)) {
            numbers.push(n)
        }
    }

    return numbers
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}