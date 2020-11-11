/* Il programma dovrà chiedere all’utente il
numero di chilometri che vuole
percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà
calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai
km (0.21 € al km), ma va applicato uno
sconto del 20% per i minorenni e del
40% per gli over 65. */

 // km da percorrere
var km = parseInt(prompt("Km da percorrere"));
document.getElementById('km').innerHTML = km;
console.log(km);
// eta del passeggero
var anni = parseInt(prompt("Quanti anni hai?"));
console.log(anni);
// prezzo del Biglietto
var ticketCost = Math.floor(km * 0.21);
console.log(ticketCost);
// sconto del 20% per i minorenni e del 40% per gli over 65
var scontoUnder = (ticketCost * 20 / 100);
console.log(scontoUnder);
var scontoOver = (ticketCost * 40 / 100);
console.log(scontoOver);
if (!isNaN(anni) && (km) ) {
  if (anni > 1, km > 0) {
    if (anni < 18) {
        document.getElementById('prezzo').innerHTML = ticketCost - scontoUnder;
    } else if (anni > 65) {
        document.getElementById('prezzo').innerHTML = ticketCost - scontoOver;
    } else {
        document.getElementById('prezzo').innerHTML = ticketCost;
    }
  } else {
    document.getElementById('prezzo').innerHTML = "Attenzione i dati inseriti sono errati";
  }
} else {
  document.getElementById('prezzo').innerHTML = "Attenzione i dati inseriti sono errati";
}
 var tempoViaggio = km * 2;
 document.getElementById('tempo').innerHTML = tempoViaggio;
