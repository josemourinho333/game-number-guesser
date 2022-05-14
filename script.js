// Clicking start will hide start container and display rules container
$('.start-button').click(function() {
  $('.start-container').css('display', 'none');
  $('.rules-container').css('display', 'block');
})

// Rules container is when game will start 
$('.start-guessing-button').click(function() {
  $('.rules-container').css('display', 'none'); // Hides rules element
  $('.guess-container').css('display', 'block'); // Displays guessing area element

  let secretNumber = Math.floor(Math.random()*50); // Generates a random number
  let storedGuesses = []; //Empty array for guesses to be stored in, in a single game
  console.log(`Secret number: ${secretNumber}`); // Console log for an answer to cheat

  // Will go through the following checks once submit guess button is clicked
  $('.guess-submit-button').click(function() {
    const guess = parseInt($('.guess-input').val()); // Input of the guess will be stored in this variable

    // Checks against the array where guesses are stored, see if user already guessed it.
    if (storedGuesses.includes(guess)) {
      storedGuesses.push(guess); // Pushes guess into the array as in counts as an attempt
      $('.guess-input').val(''); // Empties the input field
      $('.guess-container').css('display','none'); // Hides guessing area temporarily 
      $('.answer-container').css('display', 'block'); // Displays the evaluation area temporarily
      $('.answer-text').text('You already guessed this. Try again.'); // Displays the relevant evaluation message
      $('.play-again-button').hide(); // Hides play again button as this is incorrect guess path
      // Takes you back to guessing area 
      setTimeout(function() {
        $('.guess-container').css('display','block');
        $('.answer-container').css('display', 'none');
        $('.answer-text').text('');
        $('.play-again-button').show()
      }, 2000)
    }

    // Checks if there's no input or if non-number is entered
    if (isNaN(guess)) {
      $('.guess-input').val('');
      $('.guess-container').css('display','none');
      $('.answer-container').css('display', 'block');
      $('.answer-text').text('Not a number. Try again.');
      $('.play-again-button').hide();
      setTimeout(function() {
        $('.guess-container').css('display','block');
        $('.answer-container').css('display', 'none');
        $('.answer-text').text('');
        $('.play-again-button').show()
      }, 2000)
    }

    // Checks if guess is greater than the answer
    if (guess > secretNumber && !storedGuesses.includes(guess)) {
      storedGuesses.push(guess);
      $('.guess-input').val('');
      $('.guess-container').css('display','none');
      $('.answer-container').css('display', 'block');
      $('.answer-text').text('Your guess is too high. Try again.');
      $('.play-again-button').hide();
      setTimeout(function() {
        $('.guess-container').css('display','block');
        $('.answer-container').css('display', 'none');
        $('.answer-text').text('');
        $('.play-again-button').show()
      }, 2000)
    }

    // Checks if guess is lower than the answer
    if (guess < secretNumber && !storedGuesses.includes(guess)) {
      storedGuesses.push(guess);
      $('.guess-input').val('');
      $('.guess-container').css('display','none');
      $('.answer-container').css('display', 'block');
      $('.answer-text').text('Your guess is too low. Try again.');
      $('.play-again-button').hide();
      setTimeout(function() {
        $('.guess-container').css('display','block');
        $('.answer-container').css('display', 'none');
        $('.answer-text').text('');
        $('.play-again-button').show();
      }, 2000)
    }

    // Checks if guess is right
    if (parseInt(guess) === secretNumber) {
      storedGuesses.push(guess); 
      $('.guess-input').val(''); // Empties the input field
      $('.guess-container').css('display','none');
      $('.answer-container').css('display', 'block');
      $('.answer-text').text(`You guessed right. It took you ${storedGuesses.length} tries.`);

      // Take you back to start area with the window refresh to start new instance
      $('.play-again-button').click(function() {
        window.location.reload();
      });
    }
  });

})




