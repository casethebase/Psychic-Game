

// -------------- Pseudo code for overall game --------------------
// User makes a choice
// Computer makes a choice
// Capture choices from both
// Compare choices and determine win, loss, tie
// Display result to user
// ---------------------------------------------------------------


// 1.) Set an array equal to the number of possble choices. In this case, the entire alphabet.

// 1a.) Could be an opportunity to learn about how to generate a sting of letters programmatically but for now let's just make it the dumb way

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Now store the data we need to print to the screen in variables, to reference when our win/loss conditions are met

var wins = 0;
var losses = 0;
var guesses = 10;

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
    console.log(userGuess);
    guesses--;

    // Computer makes a choice, and it gets captured. 

    var computerGuess = options[Math.floor(Math.random()*options.length)]; 
    
    console.log(computerGuess);

    // We'll now try to write a condition that says 'If userGuess = computerGuess, win! Else, lose, and log it to the console to check if it works.

    if ((userGuess==computerGuess)) {
        wins++;
    }
    
    else {
        losses++;
    }

    // We can now move on to creating some html elements that will display our game logic to the page

    var html = "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>You have " + guesses + " guesses left.</p>";

    document.querySelector("#score").innerHTML = html;

    var letterGuesses = "<br><hr><h1>Your last guess was: " + userGuess + "</h1>";

    document.querySelector("#letterGuess").innerHTML = letterGuesses;
}

