//Selezionare numero di passeggeri
//Selezionare età di ogni passeggero
//Selezionare distanza di ogni passeggero
//Restituire prezzo per ogni biglietto 

//const people = [] ;
//let PeopleNumber = people.length() ;

const passengers = prompt("Inserisci il numero di passeggeri") ;
const numberOfPassengers = parseInt(passengers) ;
console.log(numberOfPassengers) ;

let distance = null ;
let age = null ;
let distanza = parseInt(distance)
let price = distanza * 0.21 ;


for (i=0 ; i< numberOfPassengers ; i++) {
    distance = prompt("Inserisci la distanza da percorrere") ;
    age = prompt("Inserisci la tua età") ;

}

console.log(price)
