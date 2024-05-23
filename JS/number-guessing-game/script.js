let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector("#guessField");

let guessCount = 1;
let resetButton;


// this is a example of arrow function declaration. Here you don't need to use the function keyword.
resetGame = () => {
    guessCount = 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses.textContent = "";
    guessField.disabled = false;
    guessSubmit.disabled = false;
    lastResult.textContent = "";
    lowOrHi.textContent = "";
    resetButton.parentNode.removeChild(resetButton);
}

// this is a example of arrow function declaration. Here you don't need to use the function keyword.
setGameOver = () => {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.querySelector(".container").appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function checkGuess() {

    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
      }
    
      guesses.textContent = `${guesses.textContent} ${parseInt(guessField.value)}`;
    
    if(randomNumber === parseInt(guessField.value)){
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if(guessCount === 10){
        lastResult.textContent = "Game Over!";
        setGameOver();
    }
    else{
        lastResult.textContent = `Wrong! You have ${10 - guessCount} more try left. The number was: ${randomNumber}`;
        lastResult.style.backgroundColor = "red";
        
        if(parseInt(guessField.value) < randomNumber){
            lowOrHi.textContent = "Hints: Last guess was too low!";
        }
        else lowOrHi.textContent = "Hints: Last guess was too high!";
        

    }

    guessCount++;
    guessField.value = "";
    guessField.focus();

}

guessSubmit.addEventListener("click", checkGuess);


  



