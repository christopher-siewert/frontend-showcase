var a = 0;
var b = 0;

$("#period").click(function() {
  $("#output").html($("#output").html() + ".");
});

$("#0").click(function() {
  $("#output").html($("#output").html() + "0");
});

$("#1").click(function() {
  $("#output").html($("#output").html() + "1");
});

$("#2").click(function() {
  $("#output").html($("#output").html() + "2");
});

$("#3").click(function() {
  $("#output").html($("#output").html() + "3");
});

$("#4").click(function() {
  $("#output").html($("#output").html() + "4");
});

$("#5").click(function() {
  $("#output").html($("#output").html() + "5");
});

$("#6").click(function() {
  $("#output").html($("#output").html() + "6");
});

$("#7").click(function() {
  $("#output").html($("#output").html() + "7");
});

$("#8").click(function() {
  $("#output").html($("#output").html() + "8");
});

$("#9").click(function() {
  $("#output").html($("#output").html() + "9");
});

$("#left-par").click(function() {
  $("#output").html($("#output").html() + "(");
});

$("#right-par").click(function() {
  $("#output").html($("#output").html() + ")");
});

$("#clear").click(function() {
  $("#output").html("");
});

$("#divide").click(function() {
  $("#output").html($("#output").html() + "/");
});

$("#times").click(function() {
  $("#output").html($("#output").html() + "*");
});

$("#minus").click(function() {
  $("#output").html($("#output").html() + "-");
});

$("#plus").click(function() {
  $("#output").html($("#output").html() + "+");
});

$("#equals").click(function() {
  
  var x = eval($("#output").html());
  $("#output").html(x);
  
});