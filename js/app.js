console.log("Simon");
const timerElemet = document.querySelector('.timer');
// console.log(timerElemet);   
let numeriPc = getOfRandomFiveNumber(1, 100, 5);


// - Visualizzare in pagina 5 numeri casuali (anche tramite alert).
//     - creare 5 numeri in modo randomico; 
document.getElementById("numeri-pc").innerHTML = numeriPc;

function getOfRandomFiveNumber(minRange, maxRange, number) {
    const pcArray = []

    for (let i = 0; i < 5; i ++) {
        // generare un numero random da rangeMin a rangeMAx
        const n = getRandomInt(minRange, maxRange);
        pcArray.push(n);
        console.log(pcArray);
        return pcArray;     
    }
}

function getRandomInt( min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// - Parte un timer di 30 secondi. 
//  - avviare il timing di 30 secondi
// (durante il quale i numero non devono essere visibili all’utente)
const timer = document.querySelector('.timer');
console.log(timer);

// - Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//     - avviare il timing di 30 secondi
//     - inserire nuemri tramite prompt
let counter = 30;
let idInterval = setInterval(onInterval, 1000);

function onInterval() {
    counter--
    if (counter === 0){
        clearInterval(idInterval);
        // aggiungere classe display none a numeri-pc
        

     let numUtente = prompt("inserisci il primo numero");
        numUtente = prompt("inserisci il secondo numero");
        numUtente = prompt("inserisci il terzo numero");
        numUtente = prompt("inserisci il quarto numero");
        numUtente = prompt("inserisci il quinto numero");
        console.log(numUtente);      
    }else {
        timerElemet.innerHTML = counter;
    }
}
// - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//     - confrontare i numeri inseriti dall'utente e quelli creati randomicamente
//     - stampare i numeri corrispondenti 