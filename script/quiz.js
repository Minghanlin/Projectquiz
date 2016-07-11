$( document ).ready(function() {


  // console.log('hello world');

  var turn = 0;
  var playerOneScore = 0;
  var playerTwoScore = 0;

  var random;
  var $question;
  var $answer;
  var $explain;

  var quizQuestions = [

  ['North Korean and Finland are seperated by one country', 0, 'Russia separates North Korea and Finland'],
  ['It rains acid on Jupiter', 1, 'It rains diamonds!'],
  ['It is possible for a professional mimic to forget his voice', 0, 'Talk about occupational hazard'],
  ['If you could fold a paper in half 35 times it would reach the moon', 1, 'You actually need to fold it 42 times'],
  ['A speck of dust is roughly halfway in size between an atom and the planet Earth', 0, 'Wow'],
  ['Elvis once entered an Elvis look-alike contest and lost', 1, 'It happened to Charlie Chaplin though'],
  ['Mammoths were alive when the Great Pyramid was being built', 0, 'How else did they move those big stones?'],
  ['Napoleon was short', 1, 'He was actually slightly above average at the time'],
  ['Lobsters are immortal', 0, 'They do not die of old age. They grow in size until an outside force kills them'],
  ['Only 10% of the brain is used', 1, 'Every region of the brain is used almost every day'],
  ['Small creatures experience time faster than we do', 0, 'We appear to be moving in slow motion to them'],
  ['Your hair and nails keep growing even after death', 1, 'The receding of skin tissues make them appear longer'],
  ['The color of the Universe is named cosmic latte', 0, 'Its RGB value is #FFF8E7'],
  ['Goldfish has a memory span of 3 seconds', 1, 'They boast a memory span fo 3 months'],
  ['Squirrels have been trained and acted as spies', 0, 'Iranian Intelligence once detained squirrels for spying on their nuclear plant'],
  ['Einstein failed math', 1, 'He failed an entrance exam but still exelled in math']
  ];

  /*startbutton pushed, generate random question, push question [x][0] into startbutton*/

  var $startButton = $('#greeting');
  $startButton.click(gamePlay);


  function gamePlay() {
    console.log('hello world');
    // var $selectedArray = quizQuestions[Math.floor((Math.random() * 16) + 1)];
    random = [Math.floor((Math.random() * quizQuestions.length) + 1)];
    $question = quizQuestions[random][0];
    $answer = quizQuestions[random][1];
    $explain = quizQuestions[random][2];
    $startButton.html($question);
    quizQuestions.splice(quizQuestions.indexOf(random),1);

  }

  function checkWin() {
    if(playerOneScore === 5) {
      $('#greeting').html('Player One Wins. Click to restart.');
      // $startButton.off("click");
    } else if(playerTwoScore === 5) {
      $('#greeting').html('Player Two Wins. Click to restart.');
      // $startButton.off("click");
    } else {
      setTimeout(gamePlay, 1000);
      turn++;
    }


  }
  var $trueButton = $('#true');
  $trueButton.click(function() {
      // player 1
      if(turn % 2 !== 0 && $answer === 0) {
        playerOneScore++;
        checkWin();
        $('#score1').html(playerOneScore);
        $('#explanation').html($explain);
      } else if (turn % 2 !== 0 && $answer === 1) {
        checkWin();
        $('#explanation').html($explain);
      // player 2
      } else if(turn % 2 === 0 && $answer === 0) {
        playerTwoScore++;
        checkWin();
        $('#score2').html(playerTwoScore);
        $('#explanation').html($explain);
      } else if (turn % 2 === 0 && $answer === 1) {
        checkWin();
        $('#explanation').html($explain);
    }
  });


  var $falseButton = $('#false');
  $falseButton.click(function() {
    if(turn % 2 !== 0 && $answer === 1) {
      playerOneScore++;
      checkWin();
      $('#score1').html(playerOneScore);
      $('#explanation').html($explain);

    } else if ((turn % 2 !== 0) && $answer === 0) {
      checkWin();
      $('#explanation').html($explain);

    } else if(turn % 2 === 0 && $answer === 1) {
      playerTwoScore++;
      checkWin();
      $('#score2').html(playerTwoScore);
      $('#explanation').html($explain);

    } else if ((turn % 2 === 0) && $answer === 0) {
      checkWin();
      $('#explanation').html($explain);

  }








// End of Document Ready
});

});
