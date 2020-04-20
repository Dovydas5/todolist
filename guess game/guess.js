function guessGame() {
  let randomNr = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt("Spek skaiciu nuo 1 iki 10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      alert("per mazai");
    } else if (randomNr < guess) {
      alert("per daug");
    }
  } while (guess != randomNr);
  alert("laimejai");
}

guessGame();
