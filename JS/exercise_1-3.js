"use strict";

let random_number = prompt("Please select a number between 1-5", 5);

if (random_number == null || random_number == 0) {
  document.getElementById("answer").innerHTML = "You can't add nothing/0!";
} else if(random_number < 5){
    document.getElementById("answer").innerHTML = "Your number can't be greater than 5!";
} else{
    document.getElementById("random_number").innerHTML = random_number;
};




