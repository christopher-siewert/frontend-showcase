$("#random").click(function(){
  window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
});

function updateSearch() {

  var searchString = $("#searchString").val();

  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&namespace=0&limit=10&formatversion=2&search=" + searchString + "&callback=?";

  $.getJSON(url, function(data) {

    var html = "";

    for (i = 0; i < 10; i++) {
      html = html + "<p class='title'><a class='title' target='_blank' href='" + data[3][i] + "'>" + data[1][i] + "<a/></p><p class='link'>" + data[3][i] + "</p><p class='snippet'>" + data[2][i] + "</p>";
    }
    $("#results").html(html);
  });

}