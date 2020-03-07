function getQuote() {
  $.getJSON(
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    function(a) {
      $("#quote").html(a[0].content);
      $("#author").html(a[0].title);
      a[0].content = a[0].content.slice(3, a[0].content.length - 5);
      hrefString =
        '<a target="_blank" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        a[0].content +
        a[0].title +
        '">Tweet This</a>';
      $("#tweetThis").html(hrefString);
    }
  );
}

$("#getQuote").click(function() {
  $.ajaxSetup({
    cache: false
  });
  newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  $("body").animate(
    {
      backgroundColor: newColor
    },
    1000
  );
  getQuote();
});
