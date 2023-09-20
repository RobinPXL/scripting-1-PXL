"use strict";

const variable = "Ik wil een koekje";
document.getElementById("change").innerHTML = variable;

//Welk karakter staat op positie 0?
console.log(variable[0]);

//Welk karakter staat op positie 3?
console.log(variable[3]);

//Op welke positie staat karakter ‘k’ voor de laatste keer?
console.log(variable.lastIndexOf("k"));

//Op welke positie staat karakter ‘e’ voor de laatste keer?
console.log(variable.lastIndexOf("e"));

//Uit hoeveel karakters bestaat de stringwaarde?
console.log(variable.length);