let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



function generateTarget() {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (a, b) => Math.abs(a - b);

// 4. returns true if user is closer to target, or tie; returns false if computer is closer to target. alerts if guess is out of range.
const compareGuesses = (humansGuess, computersGuess, targetNum) => {
    if ((humansGuess < 0) || (humansGuess > 9)) {
        window.alert('You\'ve lost for being a smartass! Next time, stay in the safe zone of 0 through 9!');
    } else if ((getAbsoluteDistance(humansGuess, targetNum)) <= (getAbsoluteDistance(computersGuess, targetNum))) {
        return true;
    } else {
        return false;
    };
};

function updateScore(winner) {
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}
