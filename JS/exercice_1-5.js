"use strict";
const sentence1 = "I'm a sentence!";
const sentence2 = "I'm a sentence too!";
const sentence3 = "I guess I'm a sentence as well.";

// Console log versie
const longSentence = sentence1 + " " + sentence2 +  " " + sentence3;
console.log(longSentence);

// Webpage/HTML versie
let change = document.getElementById("change");
change.innerHTML = longSentence;