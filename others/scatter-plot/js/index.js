"use strict";

var margin = { top: 30, right: 30, bottom: 50, left: 50 };
var width = 600 - margin.right - margin.left;
var height = 400 - margin.bottom - margin.top;

var svg = d3.select("#chart").append("svg").attr("width", width + margin.right + margin.left).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var tooltip = d3.select("#chart").append("div").attr("class", "tooltip").style("opacity", 0);

function draw(data) {

  var minSec = d3.min(data, function (d) {
    return d.Seconds;
  });
  data = data.map(function (obj) {
    obj.Seconds = obj.Seconds - minSec;
    return obj;
  });

  var xMax = d3.max(data, function (d) {
    return d.Seconds;
  });
  var xMin = d3.min(data, function (d) {
    return d.Seconds;
  });

  var yMax = d3.max(data, function (d) {
    return d.Place;
  });
  var yMin = d3.min(data, function (d) {
    return d.Place;
  });

  var xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, width]);

  var yScale = d3.scaleLinear().domain([yMin, yMax]).range([0, height]);

  var rScale = d3.scaleLinear().domain([yMin, yMax]).range([6, 3]);

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale);

  function mouseover(d) {
    tooltip.transition().duration(200).style("opacity", .9);
    tooltip.html("Name: " + d.Name + "<br>Rank: " + d.Place + "<br>Year: " + d.Year + "<br>" + d.Doping).style("left", d3.event.pageX + 20 + "px").style("top", d3.event.pageY - 35 + "px");
  }

  function mouseout(d) {
    tooltip.transition().duration(500).style("opacity", 0);
  }

  svg.selectAll("circle").data(data).enter().append("circle").attr("cx", function (d) {
    return xScale(d.Seconds);
  }).attr("cy", function (d) {
    return yScale(d.Place);
  }).attr("r", function (d) {
    return rScale(d.Place);
  }).attr("fill", function (d) {
    if (d.Doping == "") {
      return "blue";
    } else {
      return "red";
    }
  }).on("mouseover", mouseover).on("mouseout", mouseout);

  svg.append("g").attr("transform", "translate(0," + height + ")").call(xAxis);

  svg.append("g").attr("transform", "translate(0,0)").call(yAxis);

  svg.append("text").attr("text-anchor", "middle").attr("transform", "translate(-30," + height / 2 + ")rotate(-90)").text("Rank");

  svg.append("text").attr("text-anchor", "middle").attr("transform", "translate(" + width / 2 + "," + (height + 40) + ")").text("Seconds Behind First Place");

  svg.append("circle").attr("fill", "red").attr("cx", 40).attr("cy", 200).attr("r", 5);

  svg.append("circle").attr("fill", "blue").attr("cx", 40).attr("cy", 220).attr("r", 5);

  svg.append("text").attr("text-anchor", "left").attr("transform", "translate(50,205)").text("Doping Allegations");

  svg.append("text").attr("text-anchor", "left").attr("transform", "translate(50,225)").text("Clean");
}

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json", draw);