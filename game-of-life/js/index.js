"use strict";

var events = {};
var running = true;

var Parent = React.createClass({
   displayName: "Parent",

   getInitialState: function getInitialState() {
      // Build cell array
      var cells = [];
      for (var y = 0; y < 50; y++) {
         for (var x = 0; x < 50; x++) {
            cells.push(React.createElement(Cell, { id: y + "-" + x, cells: cells }));
         }
      }
      return {
         cells: cells,
         count: 0
      };
   },
   componentDidMount: function componentDidMount() {
      $(events).on("count", this.count);
   },
   count: function count() {
      var add = this.state.count + 1;
      this.setState({
         count: add
      });
   },
   onPlay: function onPlay() {
      if (running) {
         clearInterval(interval);
         running = !running;
      } else if (!running) {
         interval = setInterval(function () {
            $(events).trigger("count");
            $(events).trigger("calculate");
            $(events).trigger("renderNext");
         }, 100);
         running = !running;
      }
   },
   onClear: function onClear() {
      $(events).trigger("clear");
      this.setState({
         count: 0
      });
   },
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
               { onClick: this.onPlay },
               "Play/Pause"
            ),
            React.createElement(
               "button",
               { onClick: this.onClear },
               "Clear"
            ),
            React.createElement(
               "div",
               null,
               "Generation: ",
               this.state.count
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
      $(events).on("calculate", this.calculate);
      $(events).on("renderNext", this.renderNext);
      $(events).on("clear", this.clear);
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
   calculate: function calculate() {
      var id = this.props.id.split("-");
      var y = +id[0];
      var x = +id[1];
      this.state.nextState = false;
      debugger;
      if (this.checkCell(y, x) == 3) {
         debugger;
         this.state.nextState = true;
      } else if (this.checkCell(y, x) == 4) {
         debugger;
         this.state.nextState = this.state.alive;
      } else {
         debugger;
         this.state.nextState = false;
      }
   },
   isAlive: function isAlive(y, x) {
      return this.props.cells[y + "-" + x].state.alive;
   },
   checkCell: function checkCell(y, x) {
      debugger;
      var neighbors = [];
      for (var i = -1; i < 2; i++) {
         for (var j = -1; j < 2; j++) {
            var bumpY = y + i;
            var bumpX = x + j;
            if (bumpX < 0) {
               bumpX = 49;
            } else if (bumpX > 49) {
               bumpX = 0;
            }
            if (bumpY < 0) {
               bumpY = 49;
            } else if (bumpY > 49) {
               bumpY = 0;
            }
            debugger;
            neighbors.push(this.isAlive(bumpY, bumpX));
         }
      }
      debugger;
      neighbors = neighbors.filter(function (state) {
         return state == true;
      });
      debugger;
      return neighbors.length;
   },
   renderNext: function renderNext() {
      this.setState({
         alive: this.state.nextState
      });
   },
   render: function render() {
      return React.createElement("div", { id: this.props.id, onClick: this.onClick, className: this.state.alive ? "alive" : "dead" });
   }
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));

var interval = setInterval(function () {
   $(events).trigger("count");
   $(events).trigger("calculate");
   $(events).trigger("renderNext");
}, 100);