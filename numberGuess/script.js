const userInput = document.getElementById("userInput");
const guessBtn = document.getElementById("guessBtn");
const guessOutput = document.getElementById("guessOutput");
const answer = Math.floor(Math.random() * max) + min;
let min = 1;
let max = 100;
let attempts = 0;
let running = true;

while (running) {
  guessBtn.onclick = () => {
    let userGuess = Number(userInput.value);
    if (isNaN(userGuess)) {
      guessOutput.textContent = "Invalid Input. Please Enter a valid  Number.";
    } else if (userGuess < min || userGuess > max) {
      guessOutput.textContent = "Invalid Input. Please Enter a valid  Number.";
    }
  };
}
