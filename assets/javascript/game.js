

var totalGuesses = 10;      // number of tries
var usersGuess = [];        // letters the user guessed
var randomMovie;            // randomly generated array index
var selectedWord = [];       // This will be the word we actually build to match the current word
var remainingGuesses = 0;   // How many tries the player has left
var gameOver = false;       // Flag for 'press any key to try again'     
var wins = 0;               //wins
var losses = 0;
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
        selectedWord.push("_");       
    }

    //remove text from footer when starting a new game
    document.getElementById("resultsText").textContent ="";
    document.getElementById("tryAgain").textContent ="";

    //refresh the screen
    updateGuess();
};

//  Updates the display on the HTML Page
function updateGuess() {

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

//compare letters entered to the character you're trying to guess
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
        document.getElementById("resultsText").textContent ="YOU WIN!";
        document.getElementById("tryAgain").textContent ="Press Any Key to Start Again!";
        wins++;
        gameOver = true;        
    }
};

//check if the user is out of guesses
function isLoser() {
    if (remainingGuesses <= 0) {
        document.getElementById("resultsText").textContent ="WOMP WOMP LOOOOOOSER!";
        document.getElementById("tryAgain").textContent ="Press Any Key to Start Again!";
        losses++;
        gameOver = true;
    }
};

//guessing
function makeGuess(letter) {
    if (remainingGuesses > 0) {

        if (usersGuess.indexOf(letter) === -1) {
            usersGuess.push(letter);
            isUserCorrect(letter);
        }
    }
};

// Event listener
document.onkeydown = function (event) {
    //if the game is finished, restart it.
    if (gameOver) {
        wordGuessGame();
        gameOver = false;
    } else {
        // Check to make sure a-z was pressed.
        if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 32) {
            makeGuess(event.key.toUpperCase());
            updateGuess();
            isWinner();
            isLoser();
        }
    }
};




