//initialize variables
var movies = ["PULP FICTION", "TITANIC", "GOODFELLAS", "JURASSIC PARK", "THE SILENCE OF THE LAMBS", "THE MATRIX", "FIGHT CLUB", "SEVEN", "FORREST GUMP", "HOME ALONE"];
var totalGuesses = 10;
var usersGuess = [];
var randomMovie;
var wordGuessed = [];
var remainingGuesses = 0;
var finishedGame = false;
var wins = 0;
var losses = 0;



//start game
function wordGuessGame() {
    remainingGuesses = totalGuesses;
    randomMovie = Math.floor(Math.random() * movies.length); //generate random array location

    userGuess = []; //clear array
    wordGuessed = []; //clear array

    //create blank spaces for generated movie title
    for (var i = 0; i < movies[randomMovie].length; i++) {
        wordGuessed.push("_");
    }


}//end wordGuessGame

function checkLetter(userLetter) {
    var letterPosition = [];

    for (var i = 0; i < movies[randomMovie].length; i++) {
        if (movies[randomMovie][i] === userLetter) {
            letterPosition.push(i);
        }
    }

    /*-------------------------------------------------*/
    //attempt to automatically complete spaces in titles
    /* for (var i = 0; i < movies[randomMovie].length; i++) {
        if (movies[randomMovie][i] === " ") {
            letterPosition.push(i);
        }
    } */
    //end attempt to automatically complete spaces in titles
    /*-------------------------------------------------*/

    if (letterPosition.length <= 0) {
        remainingGuesses--;
    }
    else {
        for (var i = 0; i < letterPosition.length; i++) {
            userGuess[letterPosition[i]] = userLetter;
        }
    }
}//end checkLetter

function isWinner() {
    if (wordGuessed.indexOf("_") === -1) {
        wins++;
        finishedGame = true;
    }
}// end isWinner

function isLoser() {
    if (remainingGuesses <= 0) {
        losses++;
        finishedGame = true;
    }
}//end isLoser

function userGuesses(userLetter) {
    if (remainingGuesses > 0) {
        if (usersGuess.indexOf(userLetter) === -1) {
            usersGuess.push(userLetter);
            checkLetter(userLetter);
        }
    }
}//end userGuesses

function updateGuesses() {
    document.getElementById("gameWins").innerText = wins;
    document.getElementById("gameLosses").innerText = losses;
    
    var wordText = "";
    for (var i = 0; i < wordGuessed.length; i++) {
        wordText += wordGuessed[i];
    }

    document.getElementById("currentWord").innerText = wordText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("userGuesses").innerText = usersGuess;

}

// event listener
document.onkeyup = function (event) {
    if (finishedGame) {
        wordGuessGame();
        finishedGame = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userGuesses(event.key.toUpperCase());
            updateGuesses();
            isWinner();
            isLoser();
            console.log(movies[randomMovie]);
        }
    }
}






