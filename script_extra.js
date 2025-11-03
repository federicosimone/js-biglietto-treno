//Selezionare numero di passeggeri
//Selezionare età di ogni passeggero
//Selezionare distanza di ogni passeggero
//Restituire prezzo per ogni biglietto 

//const people = [] ;
//let PeopleNumber = people.length() ;

const passengers = prompt("Inserisci il numero di passeggeri") ;
const numberOfPassengers = parseInt(passengers) ;

let distance = null ;
let age = null ;
let price= null ;

const prezzi = []


for (i=0 ; i< numberOfPassengers ; i++) {
    let risultato = null ;
    distance = prompt("Inserisci la distanza da percorrere") ;
    age = prompt("Inserisci la tua età") ;
    let distanza = parseInt(distance) ;
    let eta = parseInt(age) ;
    let price = distanza * 0.21 ;
    if (eta < 18) {
    risultato = price - (price / 100) * 20 ;
    } else if (eta >= 18 && eta < 65) {
    risultato = price; 
    } else if (eta >= 65) {
    risultato = price - (price / 100) * 40 ;
    }
    prezzi.push(risultato)
}



let stampaInPagina = prezzi.join(', ')

document.getElementById("risultato").innerHTML =`I prezzi di ogni singolo biglietto sono € ${stampaInPagina}` ;
