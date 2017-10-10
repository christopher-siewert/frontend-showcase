"use strict";

var events = {};
var grid = [];
var Parent = React.createClass({
   displayName: "Parent",

   getInitialState: function getInitialState() {
      // Build cell array
      var cells = [];
      for (var y = 0; y < 30; y++) {
         for (var x = 0; x < 30; x++) {
            cells.push(React.createElement(Cell, { id: y + "-" + x, cells: cells }));
         }
      }
      return {
         cells: cells
      };
   },

   onClear: function onClear() {
      $(events).trigger("clear");
   },
   onPrint: function onPrint() {
      grid = [];
      $(events).trigger("print");
   },
   console: function (_console) {
      function console() {
         return _console.apply(this, arguments);
      }

      console.toString = function () {
         return _console.toString();
      };

      return console;
   }(function () {
      console.log(JSON.stringify(grid));
   }),
   render: function render() {
      return React.createElement(
         "div",
         null,
         React.createElement(
            "div",
            { className: "box" },
            this.state.cells
         ),
         React.createElement(
            "div",
            { className: "footer" },
            React.createElement(
               "button",
               { onClick: this.onClear },
               "Clear"
            ),
            React.createElement(
               "button",
               { onClick: this.onPrint },
               "Set Grid"
            ),
            React.createElement(
               "button",
               { onClick: this.console },
               "Console"
            )
         )
      );
   }
});

var Cell = React.createClass({
   displayName: "Cell",

   getInitialState: function getInitialState() {
      return {
         alive: Math.random() < 0.7 ? false : true,
         nextState: false
      };
   },
   componentDidMount: function componentDidMount() {
      this.props.cells[this.props.id] = this; // place cell as object in global array
      $(events).on("clear", this.clear);
      $(events).on("print", this.print);
   },
   onClick: function onClick(e) {
      this.setState({
         alive: !this.state.alive
      });
   },
   clear: function clear() {
      this.setState({
         alive: false
      });
   },
   print: function print() {
      if (this.state.alive == true) {
         var position = this.props.id.split("-");
         grid.push({ x: position[1], y: position[0] });
      }
   },
   render: function render() {
      return React.createElement("div", { id: this.props.id, onClick: this.onClick, className: this.state.alive ? "alive" : "dead" });
   }
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));