$.getJSON("https://gist.githubusercontent.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8/raw/ab163d77f2c37c19a1441025609bc60bd91ce53e/Twitch%2520sample%2520API%2520responses%2520in%2520array%2520form", function(data) {

  divs = $("body").find("div.stream");
  for (i = 0; i < divs.length; i++) {

    if (data[i].display_name === undefined) {
      divs.eq(i).html("<p>There was an error processing CamNCorrey's channel. This channel may no longer be active</p>");
    } else {
      stringX = "<p class='display-name'><a href='" + data[i].url + "'>" + data[i].display_name + "</a></p><p class='status'>" + data[i].status + "</p>";
      divs.eq(i).html(stringX);
    }
  }

  logos = $("body").find("div.logo");
  for (i = 0; i < logos.length; i++) {
    if (data[i].display_name !== undefined) {
      stringY = "<img class='img-responsive img-thumbnail center-block' src='" + data[i].logo + "'>";
      logos.eq(i).html(stringY);
    }
  }

  function findActive(a) {
    return a.hasOwnProperty("error") === false;
  }

  $("#All").click(function() {
    for (i = 0; i < 5; i++) {
      divs.eq(i).show();
      logos.eq(i).show();
    }
  });

  $("#Offline").click(function() {
    for (i = 0; i < 5; i++) {
      if (findActive(data[i])) {
        divs.eq(i).hide();
        logos.eq(i).hide();
      } else {
        divs.eq(i).show();
        logos.eq(i).show();
      }
    }
  });

  $("#Active").click(function() {

    for (i = 0; i < 5; i++) {
      if (findActive(data[i])) {
        divs.eq(i).show();
        logos.eq(i).show();
      } else {
        divs.eq(i).hide();
        logos.eq(i).hide();
      }
    }
  });

});