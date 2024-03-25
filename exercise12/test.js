let gameTracker = {
    wins: 0,
    losses: 0,
    ties: 0
};

let saveData = JSON.parse(localStorage.getItem("game-data"));

if (saveData) {
    gameTracker = saveData;
    RefreshScoreUI();
} else {
    console.log("We don't have local data?");
}

function getComputerMove() {
    let rng = Math.random();

    if (rng >= 0 && rng < 1 / 3) {
        return "rock";
    } else if (rng >= 1/3 && rng < 2/3) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playGame(playerMove) {
    let pcMove = getComputerMove();

    if (playerMove === 'rock') {
        if (pcMove === 'rock') {
            console.log("Tie");
            gameTracker.ties++;
        } else if (pcMove === 'paper') {
            console.log("Lost");
            gameTracker.losses++;
        } else {
            console.log("Won");
            gameTracker.wins++;
        }
    } else if (playerMove === 'paper') {
        if (pcMove === 'rock') {
            console.log("Won");
            gameTracker.wins++;
        } else if (pcMove === 'paper') {
            console.log("Tie");
            gameTracker.ties++;
        } else {
            console.log("Lost");
            gameTracker.losses++;
        }
    } else {
        if (pcMove === 'rock') {
            console.log("Lost");
            gameTracker.losses++;
        } else if (pcMove === 'paper') {
            console.log("Won");
            gameTracker.wins++;
        } else {
            console.log("Tie");
            gameTracker.ties++;
        }
    }
    RefreshScoreUI();

    // Save Game Data Locally
    localStorage.setItem("game-data", JSON.stringify(gameTracker));
    

    let playerImgElement = document.getElementById("img-player")
    let computerImgElement = document.getElementById("img-computer")

    if (pcMove === 'rock') {
        computerImgElement.src = "./images/noto--rock.svg";
    } else if (pcMove === 'paper') {
        computerImgElement.src = "./images/noto--newspaper.svg";
    } else {
        computerImgElement.src = "./images/noto--scissors.svg";
    }

    if (playerMove === 'rock') {
        playerImgElement.src = "./images/noto--rock.svg";
    } else if (playerMove === 'paper') {
        playerImgElement.src = "./images/noto--newspaper.svg";
    } else {
        playerImgElement.src = "./images/noto--scissors.svg";
    }

    
}

function RefreshScoreUI() {
    let winElement = document.getElementById("wins");
    let lossesElement = document.getElementById("losses");
    let tiesElement = document.getElementById("ties");

    winElement.innerHTML = "Wins: " + gameTracker.wins;
    lossesElement.innerHTML = "Losses: " + gameTracker.losses;
    tiesElement.innerHTML = "Ties: " + gameTracker.ties;
}

function resetGame() {
    gameTracker.wins = 0;
    gameTracker.losses = 0;
    gameTracker.ties = 0;
}