const startGame = () => {
  $('.start-container').css('display', 'none');
  $('.rules-container').css('display', 'block');
}

const startGuess = () => {
  $('.rules-container').css('display', 'none');
  $('.guess-container').css('display', 'block');
}

const submitGuess = () => {
  $('.guess-container').css('display', 'none');
  $('.answer-container').css('display', 'block');
}

const playAgain = () => {
  $('.answer-container').css('display', 'none');
  $('.start-container').css('display', 'block');
}





// Handles buttons in the page for the game
$('button').click(function(e) {
  // Declaring variable set to the class name of the elemnt clicked
  let buttonClass = this.className; 

  // Tells which function to run depending on which button is clicked
  if (buttonClass === 'start-button') {
    console.log('startbutton clicked');
    startGame();
  } else if (buttonClass === 'start-guessing-button') {
    console.log('start guessing button clicked');
    startGuess();
  } else if (buttonClass === 'guess-submit-button') {
    console.log('guess submit clicked');
    submitGuess();
  } else if (buttonClass === 'play-again-button') {
    console.log('play again clicked');
    playAgain();
  } else {
    console.log('this button not added yet in the code: ' + buttonClass);
  }
});