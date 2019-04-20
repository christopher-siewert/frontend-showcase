$('#modal-start').openModal({
  dismissible: false
});

$(".X").click(function() {
  Xs = "X";
  Os = "O";
});

$(".O").click(function() {
  Xs = "O";
  Os = "X";
  computerTurn();
});

$("#0").click(function() {
  playerTurn(0);
});
$("#1").click(function() {
  playerTurn(1);
});
$("#2").click(function() {
  playerTurn(2);
});
$("#3").click(function() {
  playerTurn(3);
});
$("#4").click(function() {
  playerTurn(4);
});
$("#5").click(function() {
  playerTurn(5);
});
$("#6").click(function() {
  playerTurn(6);
});
$("#7").click(function() {
  playerTurn(7);
});
$("#8").click(function() {
  playerTurn(8);
});

boardState = ["", "", "", "", "", "", "", "", ""];
winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var spaces = $("body").find("div.space");

function notEmpty(a) {
  return a !== "";
}

function findResult() {
  for (i = 0; i < winStates.length; i++) {
    if (boardState[winStates[i][0]] + boardState[winStates[i][1]] + boardState[winStates[i][2]] == Xs + Xs + Xs) {
      return "win";
    } else if (boardState[winStates[i][0]] + boardState[winStates[i][1]] + boardState[winStates[i][2]] == Os + Os + Os) {
      return "lose";
    }
  }
  if (boardState.every(notEmpty)) {
    return "tie";
  }
}

function updateBoard() {
  for (i = 0; i < spaces.length; i++) {
    spaces.eq(i).html(boardState[i]);
  }
  setTimeout(endGame, 600);
}

function computerTurn() {
  if (!boardState.every(notEmpty)) {
    computerChoice();
  }
  updateBoard();
}

function playerTurn(id) {
  if (boardState[id] === "") {
    boardState[id] = Xs;
    setTimeout(updateBoard, 250);
    setTimeout(computerTurn, 250);
  }
}

function endGame() {
  switch (findResult()) {
    case "win":
      $('#modal-win').openModal();
      boardState = ["", "", "", "", "", "", "", "", ""];
      updateBoard();
      if (Xs == "O") {computerTurn();}
      break;
    case "lose":
      $('#modal-lose').openModal();
      boardState = ["", "", "", "", "", "", "", "", ""];
      updateBoard();
      if (Xs == "O") {computerTurn();}
      break;
    case "tie":
      $('#modal-tie').openModal();
      boardState = ["", "", "", "", "", "", "", "", ""];
      updateBoard();
      if (Xs == "O") {computerTurn();}
      break;
  }
}

function computerChoice() {

  //first step, search for a win
  for (i = 0; i < winStates.length; i++) {
    if (boardState[winStates[i][0]] + boardState[winStates[i][1]] == Os + Os | boardState[winStates[i][1]] + boardState[winStates[i][2]] == Os + Os | boardState[winStates[i][0]] + boardState[winStates[i][2]] == Os + Os) {
      for (j = 0; j < 3; j++) {
        if (boardState[winStates[i][j]] === "") {
          boardState[winStates[i][j]] = Os;
          return;
        }
      }
    }
  }
  //second step, search for 2 in a row and block
  for (i = 0; i < winStates.length; i++) {
    if (boardState[winStates[i][0]] + boardState[winStates[i][1]] == Xs + Xs | boardState[winStates[i][1]] + boardState[winStates[i][2]] == Xs + Xs | boardState[winStates[i][0]] + boardState[winStates[i][2]] == Xs + Xs) {
      for (j = 0; j < 3; j++) {
        if (boardState[winStates[i][j]] === "") {
          boardState[winStates[i][j]] = Os;
          return;
        }
      }
    }
  }

  //third step, take the middle if not taken.
  if (boardState[4] === "") {
    boardState[4] = Os;
    return;
  }

  //step 3.5, look for cross corner opening
  if (boardState[0] + boardState[8] == Xs + Xs & boardState[4] == Os) {
    if (boardState[3] === "") {
      boardState[3] = Os;
      return;
    }
  }
  if (boardState[2] + boardState[6] == Xs + Xs & boardState[4] == Os) {
    if (boardState[5] === "") {
      boardState[5] = Os;
      return;
    }
  }

  //fourth step, take the corners
  if (boardState[0] === "") {
    boardState[0] = Os;
    return;
  }
  if (boardState[2] === "") {
    boardState[2] = Os;
    return;
  }
  if (boardState[6] === "") {
    boardState[6] = Os;
    return;
  }
  if (boardState[8] === "") {
    boardState[8] = Os;
    return;
  }
  //fifth step take one of edges
  if (boardState[1] === "") {
    boardState[1] = Os;
    return;
  }
  if (boardState[3] === "") {
    boardState[3] = Os;
    return;
  }
  if (boardState[5] === "") {
    boardState[5] = Os;
    return;
  }
  if (boardState[7] === "") {
    boardState[7] = Os;
    return;
  }

}