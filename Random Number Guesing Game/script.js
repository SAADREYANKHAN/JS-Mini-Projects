// let randomNumber = Math.floor(Math.random() * 100) +1;

// let guess = Number(prompt("Guess a number between 1 and 100"));

// if(guess === randomNumber){
//   console.log("🎉 Correct! You guessed the number!")
// }else if(guess > randomNumber){
//   console.log("too high!")
//   console.log("number was ",randomNumber)
// }else{
//   console.log("too small!")
//   console.log("Number was ",randomNumber)
// }


// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get HTML elements
let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let message = document.getElementById("message");
let attemptCount = document.getElementById("attemptCount");
let restartBtn = document.getElementById("restartBtn");

// Store number of attempts
let attempts = 0;

// When Guess button is clicked
guessBtn.addEventListener("click", function () {

    let guess = Number(guessInput.value);

    // Check if input is empty or invalid
    if (guess < 1 || guess > 100 || isNaN(guess)) {

        message.textContent = "⚠️ Please enter a number between 1 and 100.";

        return;
    }

    // Increase attempts
    attempts++;

    // Display attempts
    attemptCount.textContent = attempts;

    // Check the guess
    if (guess === randomNumber) {

        message.textContent = 
            `🎉 Correct! You guessed it in ${attempts} attempts!`;

        guessBtn.disabled = true;
        guessInput.disabled = true;

    }

    else if (guess > randomNumber) {

        message.textContent = "📈 Too high! Try a smaller number.";

    }

    else {

        message.textContent = "📉 Too low! Try a bigger number.";

    }

    // Clear input
    guessInput.value = "";

    // Put cursor back into input
    guessInput.focus();

});


// Restart the game
restartBtn.addEventListener("click", function () {

    // Generate a new random number
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // Reset attempts
    attempts = 0;

    // Reset UI
    attemptCount.textContent = "0";

    message.textContent = "Make your first guess!";

    guessInput.value = "";

    // Enable input and button
    guessInput.disabled = false;
    guessBtn.disabled = false;

    // Focus input
    guessInput.focus();

});

