 let lowestGuess = 10;
 let highestGuess = 100;
 let totalGuesses = 5;

 let currentTries = 0;

 let gameDifficulty = "easy";

 let currentRandomNumber = 0;
 let gameIsWon = false;

 const GameDifficulties = {
    Easy: "easy",
    Medium: "medium",
    Hard: "hard",
    Random: "random"
 };
 

 const easyButton = document.getElementById("btn-easy");
 const medButton = document.getElementById("btn-med");
 const hardButton = document.getElementById("btn-hard");

 const playfield = document.getElementById("playfield");

 easyButton.onclick = function() {
    selectDifficulty(GameDifficulties.Easy);
    if (!playfield.classList.contains("playfield-anim")) {
        playfield.classList.add("playfield-anim");
    }
 }

 medButton.onclick = function() {
    selectDifficulty(GameDifficulties.Medium);
    if (!playfield.classList.contains("playfield-anim")) {
        playfield.classList.add("playfield-anim");
    }
 }

 hardButton.onclick = function() {
    selectDifficulty(GameDifficulties.Hard);
    if (!playfield.classList.contains("playfield-anim")) {
        playfield.classList.add("playfield-anim");
    }
 }

 const numberInput = document.getElementById("numberInput");
 //  const submitButton = document.getElementById("submit");
//  submitButton.onclick = function() {
//     let input = Number(numberInput.value);
//     if (input) {
//         console.log(input);
//         guessNumber(input);
//     }
//  }


 numberInput.onkeydown = function(event) {
    if (event.key === "Enter") {
        // Lets make sure before using a try we've put a number.
        let inputIsDigits = Number(numberInput.value);
        if (inputIsDigits) {
            console.log("We entered a number!");
            guessNumber(inputIsDigits);
        } else {
            console.log("input was not a number");
        }
    }
 }
 

 function selectRandomNumber() {
    currentRandomNumber = Math.floor(Math.random() * (highestGuess - lowestGuess + 1) + lowestGuess);
 }


 const diffDisplay = document.getElementById("diffDisplay");
 const lowHighDisplay = document.getElementById("lowHighDisplay");

 function selectDifficulty(diff) {
    switch (diff) {
        case GameDifficulties.Easy: {
            lowestGuess = 0;
            highestGuess = 10;
            totalGuesses = 5;
        } break;
        
        case GameDifficulties.Medium: {
            lowestGuess = 0;
            highestGuess = 50;
            totalGuesses = 5;
        } break;
        
        case GameDifficulties.Hard: {
            lowestGuess = 0;
            highestGuess = 100;
            totalGuesses = 3;
        } break;
        
        case "random": {
        }
    }

    gameDifficulty = diff;
    diffDisplay.textContent = "Difficulty: " + diff.charAt(0).toUpperCase() + diff.slice(1);
    startGame();
    lowHighDisplay.textContent = `Guess between: ${lowestGuess} - ${highestGuess}`;
 }

 function startGame() {
    selectRandomNumber();
    currentTries = 0;
    gameIsWon = false;
    triesLeftDisplay.textContent = `Number Of Tries: ${totalGuesses - currentTries}`;
    console.log(`Random Number Selected -> ${currentRandomNumber}`);
    highlowDisplay.textContent = "Guess a Number";
 }

 const triesLeftDisplay = document.getElementById("triesLeftDisplay");
 const lastGuessDisplay = document.getElementById("lastGuessDisplay");
 const highlowDisplay = document.getElementById("high-low");

 function guessNumber(num) {

    if (currentTries >= totalGuesses || gameIsWon) {
        return;
    }
     console.log(currentTries);
     currentTries++;
     triesLeftDisplay.textContent = `Number Of Tries: ${totalGuesses - currentTries}`;


     if (num === currentRandomNumber) {
         wonGame();
     } else {
         if (num > currentRandomNumber) {
             // We guessed higher than the number.
             highlowDisplay.textContent = "Number is lower";
            } else {
                // We guessed lower than the number.
                highlowDisplay.textContent = "Number is higher";
         }
     }
     
    if (currentTries >= totalGuesses) {
        gameOver();
        return;
    }

    lastGuessDisplay.textContent = "Last Guess: " + num;
 }

 const gameStatusDisplay = document.getElementById("gameStatusDisplay");

 function gameOver() {
    // Reset The Game!
    console.log("GAME OVER!");
    gameStatusDisplay.textContent = "You Lost!";
}

function wonGame() {
    // Add To Completion
    console.log(`You Won! It took ${currentTries} tries`);
    gameStatusDisplay.textContent = `You Won!`;
    gameIsWon = true;
 }

 selectDifficulty(GameDifficulties.Easy);



