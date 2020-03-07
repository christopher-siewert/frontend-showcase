"use strict";

var width = 900;
var height = 600;

var svg = d3.select(".card").append("svg").attr("width", width).attr("height", height);

function draw(data) {
  var parsedData = data.data.map(function (array) {
    return {
      Year: array[0],
      "Billions of Dollars": array[1]
    };
  });
  var chart = new dimple.chart(svg, parsedData);
  var year = chart.addTimeAxis("x", "Year", "%Y-%m-%d", "%Y");
  year.timePeriod = d3.time.years;
  year.timeInterval = 5;
  chart.addMeasureAxis("y", "Billions of Dollars");
  chart.addSeries(null, dimple.plot.bar);
  chart.draw();
}

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", draw);