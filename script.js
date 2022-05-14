$('.start-button').click(function() {
  $('.start-container').css('display', 'none');
  $('.rules-container').css('display', 'block');
})

$('.start-guessing-button').click(function() {
  $('.rules-container').css('display', 'none');
  $('.guess-container').css('display', 'block');
  //once clicked, need to generate a number that will last until play again is clicke
  let secretNumber = Math.floor(Math.random()*50);
  let storedGuesses = [];
  console.log(`Secret number: ${secretNumber}`);

  $('.guess-submit-button').click(function() {
    const guess = parseInt($('.guess-input').val());
    
    if (storedGuesses.includes(guess)) {
      storedGuesses.push(guess);
      $('.guess-input').val('');
      $('.guess-container').css('display','none');
      $('.answer-container').css('display', 'block');
      $('.answer-text').text('You already guessed this. Try again.');
      $('.play-again-button').hide();
      setTimeout(function() {
        $('.guess-container').css('display','block');
        $('.answer-container').css('display', 'none');
        $('.answer-text').text('');
        $('.play-again-button').show()
      }, 2000)
    }

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

    if (parseInt(guess) === secretNumber) {
      storedGuesses.push(guess);
      $('.guess-input').val('');
      $('.guess-container').css('display','none');
      $('.answer-container').css('display', 'block');
      $('.answer-text').text(`You guessed right. It took you ${storedGuesses.length} tries.`);

      $('.play-again-button').click(function() {
        window.location.reload();
      });
    }
  });

})




