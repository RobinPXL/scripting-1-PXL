"user strict";

//asking for random sentence to user
let randomSentence = prompt("Give a random sentence!", "The fox jumps over the rainbow");
console.log("This was your random sentence: " + randomSentence);

//show the length of the random sentence back to the user
let indexSpace = randomSentence.indexOf(" ");
indexSpace += 1;

const answer = "Your first space is found at index: " + indexSpace;
alert(answer);
console.log(answer);