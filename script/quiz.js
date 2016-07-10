console.log('hello world');

var turn = 0;
var playerOneScore = 0;
var playerTwoScore = 0;

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
$startButton.click(function() {
  console.log('hello world');
  var $selectedArray = $('quizQuestions[Math.floor((Math.random() * 16) + 1)]');
  var $question = $('selectedArray[0]');
  var $answer = $('selectedArray[1]');
  var $explain = $('selectedArray[2]');
  /*var $question = $('quizQuestions[Math.floor((Math.random() * 16) + 1)][0]');
  var $answer = $('quizQuestions[Math.floor((Math.random() * 16) + 1)][1]');
  var $explain = $('quizQuestions[Math.floor((Math.random() * 16) + 1)][2]');*/
  $('#greeting').html('$question');

/* If click true, if user one, if answer true, add point to user one,
if click true, if user two, if answer true, add point to user two, display explanation */
  var $clickTrue = $('#true');
  $clickTrue.click(function() {
    if((turn % 2 === 0) && $answer === 0) {
      playerOneScore++;
      $('#score1').html(playerOneScore);
      $('#explanation').html($explain);

    } else if((turn % 2 !== 0) && $answer === 0) {
      playerTwoScore++;
      $('#score2').html(playerTwoScore);
      $('#explanation').html($explain);
    }

  }); clickTrue();

  /* If click false, if user one, if answer false, add point to user one,
  if click false, if user two, if answer false, add point to user two, display explanation */

  var $clickFalse = $('#false');
  $clickFalse.click(function() {
    if((turn % 2 === 0) && $answer === 1) {
      playerOneScore++;
      $('#score1').html(playerOneScore);
      $('#explanation').html($explain);

    } else if((turn % 2 !== 0) && $answer === 1) {
      playerTwoScore++;
      $('#score2').html(playerTwoScore);
      $('#explanation').html($explain);
    }


  }); clickFalse();

function checkWin() {
  if(playerOneScore === 5) {
    $('#greeting').html('Player One Wins');
  } else if(playerTwoScore === 5) {
    $('#greeting').html('Player One Wins');
  }

} checkWin();



}); startButton();
