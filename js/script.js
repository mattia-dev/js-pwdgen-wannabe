var name = prompt("Qual è il tuo nome?");
var surname = prompt("Qual è il tuo cognome?");
var color = prompt("Qual è il tuo colore preferito?");

var currentYear = 2021;

document.getElementById('suggested-password').innerHTML = "La password suggerita è: " + name + surname + color + currentYear + ".";

