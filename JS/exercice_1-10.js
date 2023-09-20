"use strict";

//ask two random numbers
let randomNumber1 = prompt("Give me a random number! (don't add comma's, dividers or anything, just a straight number)", 5);
let randomNumber2 = prompt("Give me another random number, same principle as before!", 3);

//multiply numbers
let multNumber = randomNumber1 * randomNumber2;

//output multiplication on webpage
document.getElementById("change").innerHTML = `This is the new multiplication number: ${multNumber}.`;