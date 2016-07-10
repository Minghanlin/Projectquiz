/* TTT for reference var turn = 0;
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
