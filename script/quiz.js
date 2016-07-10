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



});




/* TTT for reference
var turn = 0;
var playerXmoves =[];
var playerOmoves = [];

function gamePlay() {
  var box = document.getElementsByClassName("box");
  for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', Choice, false);
  }
}

gamePlay();

function Choice() {
  if(turn % 2 ===0) {
    event.target.innerHTML = "<h3> X </h3>";
    document.getElementById('bulletin').innerHTML = "O's Turn";
    turn++;
    playerXmoves.push(event.target.id);
    checkWinX();
  }
  else {
    event.target.innerHTML = "<h3> O </h3>";
    document.getElementById('bulletin').innerHTML = "X's Turn";
    turn++;
    playerOmoves.push(event.target.id);
    checkWinO();
  }
}

function clearBoard() {
  var clearboard = document.getElementById('clear');
  clearboard.addEventListener('click', reLoad, false);
}

clearBoard();

function reLoad() {
  location.reload();
}


function checkWinX() {
  if((playerXmoves.indexOf('boxone') !== -1 && playerXmoves.indexOf('boxtwo') !== -1 && playerXmoves.indexOf('boxthree') !== -1) ||
  (playerXmoves.indexOf('boxfour') !== -1 && playerXmoves.indexOf('boxfive') !== -1 && playerXmoves.indexOf('boxsix') !== -1) ||
  (playerXmoves.indexOf('boxseven') !== -1 && playerXmoves.indexOf('boxeight') !== -1 && playerXmoves.indexOf('boxnine') !== -1) ||
  (playerXmoves.indexOf('boxone') !== -1 && playerXmoves.indexOf('boxfour') !== -1 && playerXmoves.indexOf('boxseven') !== -1) ||
  (playerXmoves.indexOf('boxtwo') !== -1 && playerXmoves.indexOf('boxfive') !== -1 && playerXmoves.indexOf('boxeight') !== -1) ||
  (playerXmoves.indexOf('boxthree') !== -1 && playerXmoves.indexOf('boxsix') !== -1 && playerXmoves.indexOf('boxnine') !== -1) ||
  (playerXmoves.indexOf('boxone') !== -1 && playerXmoves.indexOf('boxfive') !== -1 && playerXmoves.indexOf('boxnine') !== -1) ||
  (playerXmoves.indexOf('boxthree') !== -1 && playerXmoves.indexOf('boxfive') !== -1 && playerXmoves.indexOf('boxseven') !== -1))
{
  document.getElementById('bulletin').innerHTML = "Player X Wins!";
  document.getElementById('bulletin').style.fontSize = "30px";
  document.getElementById('clear').innerHTML = "Restart";
}
else if(turn >=9) {
  document.getElementById('bulletin').innerHTML = "Drawn!";
  document.getElementById('bulletin').style.fontSize = "30px";
  document.getElementById('clear').innerHTML = "Restart";
}
}



function checkWinO() {
  if((playerOmoves.indexOf('boxone') !== -1 && playerOmoves.indexOf('boxtwo') !== -1 && playerOmoves.indexOf('boxthree') !== -1) ||
  (playerOmoves.indexOf('boxfour') !== -1 && playerOmoves.indexOf('boxfive') !== -1 && playerOmoves.indexOf('boxsix') !== -1) ||
  (playerOmoves.indexOf('boxseven') !== -1 && playerOmoves.indexOf('boxeight') !== -1 && playerOmoves.indexOf('boxnine') !== -1) ||
  (playerOmoves.indexOf('boxone') !== -1 && playerOmoves.indexOf('boxfour') !== -1 && playerOmoves.indexOf('boxseven') !== -1) ||
  (playerOmoves.indexOf('boxtwo') !== -1 && playerOmoves.indexOf('boxfive') !== -1 && playerOmoves.indexOf('boxeight') !== -1) ||
  (playerOmoves.indexOf('boxthree') !== -1 && playerOmoves.indexOf('boxsix') !== -1 && playerOmoves.indexOf('boxnine') !== -1) ||
  (playerOmoves.indexOf('boxone') !== -1 && playerOmoves.indexOf('boxfive') !== -1 && playerOmoves.indexOf('boxnine') !== -1) ||
  (playerOmoves.indexOf('boxthree') !== -1 && playerOmoves.indexOf('boxfive') !== -1 && playerOmoves.indexOf('boxseven') !== -1))
{
  document.getElementById('bulletin').innerHTML = "Player O Wins!";
  document.getElementById('bulletin').style.fontSize = "45px";
  document.getElementById('clear').innerHTML = "Restart";
}
else if(turn >=9) {
  document.getElementById('bulletin').innerHTML = "Drawn!";
  document.getElementById('bulletin').style.fontSize = "45px";
  document.getElementById('clear').innerHTML = "Restart";
}
}
*/
