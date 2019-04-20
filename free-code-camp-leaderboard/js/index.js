"use strict";

var Parent = React.createClass({
  displayName: "Parent",

  getInitialState: function getInitialState() {
    return {
      rank: "alltime"
    };
  },

  monthPoints: function monthPoints() {
    this.setState({
      rank: "recent"
    });
  },

  allTimePoints: function allTimePoints() {
    this.setState({
      rank: "alltime"
    });
  },

  render: function render() {
    return React.createElement(
      "table",
      { className: "striped" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { "data-field": "rank" },
            "#"
          ),
          React.createElement(
            "th",
            { "data-field": "name" },
            "Name"
          ),
          React.createElement(MonthPoints, { onClick: this.monthPoints }),
          React.createElement(AllPoints, { onClick: this.allTimePoints })
        )
      ),
      React.createElement(DisplayChart, { rank: this.state.rank })
    );
  }
});

function MonthPoints(props) {
  return React.createElement(
    "th",
    { onClick: props.onClick, "data-field": "recent", className: "button" },
    "Points in Last 30 Days"
  );
}

function AllPoints(props) {
  return React.createElement(
    "th",
    { onClick: props.onClick, "data-field": "alltime", className: "button" },
    "All Time Points"
  );
}

var DisplayChart = React.createClass({
  displayName: "DisplayChart",

  getInitialState: function getInitialState() {
    return {
      data: {
        __html: "Loading....."
      }
    };
  },

  getData: function getData(url) {
    var tableString = "";
    $.getJSON(url, function (data) {
      for (var i = 0; i < 100; i++) {
        var t = i + 1;
        tableString = tableString.concat("<tr><td>" + t + "</td><td>" + data[i].username + "</td><td>" + data[i].recent + "</td><td>" + data[i].alltime + "</td></tr>");
      }
      tableString = { __html: tableString };
      this.setState({
        data: tableString
      });
    }.bind(this));
  },

  componentWillMount: function componentWillMount() {
    var url = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    this.getData(url);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var url = nextProps.rank == "alltime" ? "https://fcctop100.herokuapp.com/api/fccusers/top/alltime" : "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    this.getData(url);
  },

  render: function render() {
    return React.createElement("tbody", { dangerouslySetInnerHTML: this.state.data });
  }

});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));