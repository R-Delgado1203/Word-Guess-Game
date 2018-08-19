

var totalGuesses = 10;      // number of tries
var usersGuess = [];        // user letters guessed
var randomMovie;            // num generater to grab index for movie array
var selectedWord = [];      // array of randomly selected word in "_" format
var remainingGuesses = 0;   // remainaing guesses
var gameOver = false;       // is game over?     
var wins = 0;               // wins
var losses = 0;             // losses
var movies = ["PULP FICTION", "TITANIC", "GOODFELLAS", "JURASSIC PARK", "THE SILENCE OF THE LAMBS", "THE MATRIX", "FIGHT CLUB", "SEVEN", "FORREST GUMP", "HOME ALONE"];



// start the game
function wordGuessGame() {
    remainingGuesses = totalGuesses;

    //grab a random number from the movies array
    randomMovie = Math.floor(Math.random() * (movies.length));

    //display a hint for the selected movie
    if (movies[randomMovie] == movies[0]) {
        document.getElementById("hint").textContent = "Say What AGAIN, I dare you. I DOUBLE DARE you.";
    }
    else if (movies[randomMovie] == movies[1]) {
        document.getElementById("hint").textContent = "A woman's heart is a deep ocean of secrets.";
    }
    else if (movies[randomMovie] == movies[2]) {
        document.getElementById("hint").textContent = "As far back as I can remember, I always wanted to be a gangster.";
    }
    else if (movies[randomMovie] == movies[3]) {
        document.getElementById("hint").textContent = "Life uh.... ...finds a way.";
    }
    else if (movies[randomMovie] == movies[4]) {
        document.getElementById("hint").textContent = "It puts the lotion on it's skin, or else it gets the hose again.";
    }
    else if (movies[randomMovie] == movies[5]) {
        document.getElementById("hint").textContent = "You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.";
    }
    else if (movies[randomMovie] == movies[6]) {
        document.getElementById("hint").textContent = "I am Jack's raging bile duct.";
    }
    else if (movies[randomMovie] == movies[7]) {
        document.getElementById("hint").textContent = "WHATS IN THE BOX?!?!?!?!";
    }
    else if (movies[randomMovie] == movies[8]) {
        document.getElementById("hint").textContent = "I'm not a smart man, but I know what love is.";
    }
    else if (movies[randomMovie] == movies[9]) {
        document.getElementById("hint").textContent = "Keep the change, ya filthy animal!";
    }



    // empty arrays
    usersGuess = [];
    selectedWord = [];

    //build the word with blanks
    for (var i = 0; i < movies[randomMovie].length; i++) {
        if (movies[randomMovie][i] === " ") {
            selectedWord.push(" ");
        }
        else {
            selectedWord.push("_");
        }
    }

    //remove text from footer when starting a new game
    document.getElementById("resultsText").textContent = "";
    document.getElementById("tryAgain").textContent = "";
    document.getElementById("usersGuessHead").textContent = "";
    //refresh the screen
    updateUI();
};

//  update browser
function updateUI() {

    document.getElementById("gameWins").innerText = wins;
    document.getElementById("gameLosses").innerText = losses;

    var guessedLetter = "";
    for (var i = 0; i < selectedWord.length; i++) {
        guessedLetter += selectedWord[i];
    }

    //update guesses, word, and letters entered
    document.getElementById("currentWord").innerText = guessedLetter;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("usersGuess").innerText = usersGuess;
};

//compare letters entered to the movie you're trying to guess
function isUserCorrect(letter) {
    var positions = [];

    for (var i = 0; i < movies[randomMovie].length; i++) {
        if (movies[randomMovie][i] === letter) {
            positions.push(i);
        }
    }


    if (positions.length <= 0) {
        remainingGuesses--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            selectedWord[positions[i]] = letter;
        }
    }
};

//check if all letters have been entered.
function isWinner() {
    if (selectedWord.indexOf("_") === -1) {
        gameOver = true;
        wins++;
        updateUI();
        document.getElementById("resultsText").textContent = "YOU WIN!";
        document.getElementById("tryAgain").textContent = "Press the ENTER Key to Start Again!";


    }
};

//check if the user is out of guesses
function isLoser() {
    if (remainingGuesses <= 0) {
        gameOver = true;
        losses++;
        updateUI();
        document.getElementById("resultsText").textContent = "WOMP WOMP LOOOOOOSER!";
        document.getElementById("tryAgain").textContent = "Press the ENTER key to Start Again!";


    }
};

//guessing
function makeGuess(letter) {
    document.getElementById("usersGuessHead").textContent = "Letters Guessed:";
    if (remainingGuesses > 0) {
        if (usersGuess.indexOf(letter) === -1) {
            usersGuess.push(letter);
            isUserCorrect(letter);
        }
    }
};

// Event listener
document.onkeydown = function (event) {

    
        if (gameOver && event.keyCode === 13) {
            wordGuessGame();
            gameOver = false;
        }
  
        if (gameOver === false && event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toUpperCase());
            updateUI();
            isWinner();
            isLoser();
        }
    
};




