$(function() {

  var originalTime = 1500;
  var timeRemaining = originalTime;
  var timerOn = false;

  function displayTime() {
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = timeRemaining % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    var display = minutes + ":" + seconds;
    return display;
  }

  function updateTime() {
    if (timerOn === true) {
      timeRemaining -= 1;
      if (timeRemaining === 0) {
        alarm();
      } else {
        $("#clock").html(displayTime);
        setTimeout(function() {
          updateTime();
        }, 1000);
      }
    }
  }

  function alarm() {
    var audio = new Audio("http://www.soundjay.com/button/beep-07.mp3");
    audio.loop = true;
    audio.play();
    setTimeout(function() {
      audio.pause();
    }, 1100);
  }

  $("#clock").html(displayTime);

  $("#start").click(function() {
    if (timerOn === false) {
      timerOn = true;
      updateTime();
      $("#start").html("<i class='fa fa-pause'></i>");
    } else {
      timerOn = false;
      $("#start").html("<i class='fa fa-play'></i>");
    }
  });

  $("#reset").click(function() {
    if (timerOn === false) {
      timeRemaining = originalTime;
      $("#clock").html(displayTime);
    }
  });

  $("#add").click(function() {
    if (timerOn === false & originalTime < 3540) {
      originalTime += 60;
      timeRemaining = originalTime;
      $("#clock").html(displayTime);
    }
  });

  $("#minus").click(function() {
    if (timerOn === false & originalTime > 60) {
      originalTime -= 60;
      timeRemaining = originalTime;
      $("#clock").html(displayTime);
    }
  });

});