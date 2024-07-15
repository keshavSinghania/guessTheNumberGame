// come on keshav you can do this
let randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);

const submitBtn = document.getElementById("subt");
const mssgBox = document.querySelector(".mssgBox");
const preGuessesBox = document.querySelector(".guesses");
const guessesRemainingBox = document.querySelector(".lastResult");
const valueBox = document.querySelector(".guessField");

let guessesLeft = 10;
let preGuessesArray=[];

// first get value from user whenever he or she submit
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    submitBtn.value = "Submit guess";
    submitBtn.style.backgroundColor = "green";
    let value = Number(valueBox.value);
    console.log(value);
    valueBox.value=""

    if (isValid(value)) {
        guessesLeft--;
        guessesRemainingBox.innerHTML = guessesLeft;
        preGuessesArray.push(value)
        preGuessesBox.innerHTML=preGuessesArray;
        isWon(value);
    }

    canPlay(value);
});

// check that have more chances or not and if not then reset value
function canPlay(value) {
    if (guessesLeft <= 0) {
        submitBtn.value = "New Game";
        submitBtn.style.backgroundColor = "red";
        resetValues();
    }
    if(value==randomNumber){
        submitBtn.value = "You Won Play Again";
        submitBtn.style.backgroundColor = "blue";
        resetValues()
    }
}

// to check entered number is valid or not
function isValid(value) {
    if (isNaN(value)) {
        mssgBox.innerHTML = `Uff Yrr Please Enter Number Only (${value})`;
        return false;
    } else if (value > 100) {
        mssgBox.innerHTML = `${value} is greater than 100.. INVALID!!`;
        return false;
    } else if (value < 1) {
        mssgBox.innerHTML = `${value} is smaller than 1.. INVALID!!`;
        return false;
    }
    return true;
}

// to check do user guessed the right number
function isWon(value) {
    if (value == randomNumber) {
        mssgBox.innerHTML = `CONGRATS, YOU DID IT <br> ${value} is the correct number`;
    } else if (value > randomNumber && value <= 100) {
        mssgBox.innerHTML = `Uff Yrr, Entered Number Is Greater`;
    } else if (value < randomNumber && value >= 1) {
        mssgBox.innerHTML = `Uff Yrr, Entered Number Is Smaller`;
    }
}

function resetValues() {
    guessesLeft = 10;
    randomNumber = Math.floor((Math.random() * 100) + 1);
    mssgBox.innerHTML = "";
    valueBox.value = "";
    preGuessesArray=[];
    preGuessesBox.innerHTML=" "
    console.log(randomNumber);
}
