var userName = prompt("Qual è il tuo nome?");
var userSurname = prompt("Qual è il tuo cognome?");
var preferredColor = prompt("Qual è il tuo colore preferito?");
var userAge = prompt("Quanti anni hai?");

var currentYear = 2021;
var birthYear = currentYear - parseInt(userAge);

var userNameLetterCount = userName.length;

document.getElementById('suggested-password').innerHTML = "La password suggerita è: " + userNameLetterCount + userName + userSurname + preferredColor + birthYear + ".";