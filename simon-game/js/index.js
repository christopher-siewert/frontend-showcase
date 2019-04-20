$("#red").click(function() {
  userClick(0);
});
$("#blue").click(function() {
  userClick(1);
});
$("#yellow").click(function() {
  userClick(2);
});
$("#green").click(function() {
  userClick(3);
});

$("#start").click(function() {
  userChain = [];
  chain = [];
  userTurn = false;
  guessNum = 0;
  $("#count").html("Count: 0");
  updateHeading();
  computerTurn();
});

$("#strict").click(function() {
  if (strictMode === false) {
    $("#strict").addClass("disabled");
    strictMode = !strictMode;
  } else {
    $("#strict").removeClass("disabled");
    strictMode = !strictMode;
  }
});


var buttons = $("body").find("div.button");
var chain = [];
var userChain = [];
var guessNum = 0;
var userTurn = false;
var strictMode = false;
var beeps = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"]
var colors = [["#880000", "#ff0000"],["#000044", "#0000ff"],["#999900", "#ffff00"],["#003300", "#00bb00"]]


function updateHeading() {
  if (userTurn) {
    $("#turn").html("Your turn to copy!")
  } else {
    $("#turn").html("Watch carefully...")
  }
}

function randNum () {
  return Math.floor(Math.random() * 4);
}

function computerTurn () {
  chain.push(randNum());
  $("#count").html("Count: " + chain.length);
  computerSequence(0);
}

function flash (arg) {
  var audio = new Audio(beeps[arg]);
  audio.play();
  buttons.eq(arg).animate({backgroundColor: colors[arg][1]}, 0).delay(620).animate({backgroundColor: colors[arg][0]}, 0);
}

function computerSequence(a) {
  if (a == chain.length) {
    userTurn = true;
    updateHeading();
    guessNum = 0;
    userChain = [];
    return;
  }
  flash(chain[a]);
  setTimeout(function() {computerSequence(a + 1);}, 800);
}

function compare(turn) {
  return userChain[turn] == chain[turn];
}


function userClick(arg) {
  if (userTurn) {
    userChain.push(arg);
    flash(userChain[guessNum]);
    if (compare(guessNum)) {
      if (userChain.length == 20) {
        userChain = [];
        chain = [];
        userTurn = false;
        guessNum = 0;
        $("#count").html("Count: 0");
        updateHeading();
        $('#won').openModal();
        return;
      }
      if (userChain.length == chain.length) {
        userTurn = false;
        setTimeout(function() {updateHeading();computerTurn();}, 1200);
        return;
      }
    guessNum++;
    } else {
      endGame();
    }
  }
}

function endGame () {
  if (strictMode === true) {
    userChain = [];
    chain = [];
    userTurn = false;
    guessNum = 0;
    $("#count").html("Count: 0");
    updateHeading();
    $('#lost').openModal();
  } else {
    userTurn = false;
    updateHeading();
    $('#try-again').openModal({complete: function() {computerSequence(0);}});
  }
}