"use strict";

// Console log versie

const sentence1 = "I'm a sentence!";
const sentence2 = "I'm a sentence too!";
const sentence3 = "I guess I'm a sentence as well.";

console.log(sentence1 + " " + sentence2 +  " " + sentence3);

// Webpage/HTML versie

let document = document.getElementById("change");

document.innerHTML = "";
document.innerHTML = null;