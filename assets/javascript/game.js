//initialize variables
var movies = ["Pulp Fiction", "Titanic", "Goodfellas", "Jurassic Park", "The Silence of the Lambs", "The Matrix", "Fight Club", "Seven", "Forrest Gump", "Home Alone"];
var totalGuesses = 10;     
var userGuess = [];       
var randomMovie;           
var wordGuessed = [];       
var remainingGuesses = 0;        
var finishedGame = false;   
var wins = 0;               
var losses = 0;         



//start game
function wordGuessGame(){
    remainingGuesses = totalGuesses;
    randomMovie = Math.floor(Math.random() * movies.length);

    userGuess = [];
    wordGuessed = [];

    //create blank spaces for generated movie title
    for (var i=0; i<movies[randomMovie].length; i++){
        wordGuessed.push("_");
    }


}


