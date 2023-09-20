"use strict";

//ask two random numbers
let randomNumber1 = prompt("Give me a random number! (don't add comma's, dividers or anything, just a straight number)", 5);
let randomNumber2 = prompt("Give me another random number, same principle as before!", 3);

randomNumber1 = parseInt(randomNumber1);
randomNumber2 = parseInt(randomNumber2);

//multiply numbers
const multNumber = randomNumber1 * randomNumber2;

const sumNumber = parseInt(randomNumber1) + parseInt(randomNumber2);

const subtractNumber = randomNumber1 - randomNumber2;

const divisionNumber = randomNumber1 / randomNumber2;

//output multiplication on webpage
document.getElementById("change").innerHTML = `This is the new multiplication number: ${multNumber}.`;

document.getElementById("change2").innerHTML = `This is the new sum: ${sumNumber}.`;

document.getElementById("change3").innerHTML = `This is the new subtraction: ${subtractNumber}.`;

document.getElementById ("change4").innerHTML = `This is the new division: ${divisionNumber}.`;