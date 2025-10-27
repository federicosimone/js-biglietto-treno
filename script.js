// inserire i età e km utente 

const distUt = prompt("Inserisci i Km che vuoi percorrere");
const etaUt = prompt("Inserisci la tua età");
const distanza = parseInt(distUt);
const eta = parseInt(etaUt);
let risultato = null;
let price = distanza * 0.21 ;


//


//svolgimento

if (eta < 18) {
    risultato = price - (price / 100) * 20 ;
} else if (eta >= 18 && eta < 65) {
    risultato = price; 
} else if (eta >= 65) {
    risultato = price - (price / 100) * 40 ;
}

//risultato 

alert(risultato.toFixed(2)) ;







