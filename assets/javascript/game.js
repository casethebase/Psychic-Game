var options = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerGuess = "";

function pickLetter() {
  return options[Math.floor(Math.random() * options.length)];
}

function resetRound() {
  guessesLeft = 10;
  guessesSoFar = [];
  computerGuess = pickLetter();
}

function render(message) {
  var html = "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + (guessesSoFar.join(", ") || "None") + "</p>";

  document.querySelector("#score").innerHTML = html;
  document.querySelector("#letterGuess").innerHTML = message ? "<br><hr><h1>" + message + "</h1>" : "";
}

function isLetter(value) {
  return options.indexOf(value) !== -1;
}

resetRound();
render();

document.addEventListener("keyup", function(event) {
  var userGuess = event.key.toLowerCase();

  if (!isLetter(userGuess)) {
    render("Please press a letter from A-Z.");
    return;
  }

  if (guessesSoFar.indexOf(userGuess) !== -1) {
    render("You already guessed " + userGuess + ".");
    return;
  }

  guessesSoFar.push(userGuess);

  if (userGuess === computerGuess) {
    wins += 1;
    resetRound();
    render("Correct. New round started.");
    return;
  }

  guessesLeft -= 1;

  if (guessesLeft === 0) {
    losses += 1;
    var missedLetter = computerGuess;
    resetRound();
    render("Out of guesses. The letter was " + missedLetter + ".");
    return;
  }

  render("Your last guess was " + userGuess + ".");
});
