"use strict";

var startString = 'Heading\n==\n\nSub-heading\n--\n\n### Another deeper h3 heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break.\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~.\n\nA list:\n\n  * HTML\n  * CSS\n  * JavaScript\n\nNumbered list:\n\n  1. React\n  2. D3\n  3. Sass\n\n';

var Parent = React.createClass({
  displayName: "Parent",

  getInitialState: function getInitialState() {
    return { text: startString };
  },

  changeText: function changeText(newText) {
    this.setState({
      text: newText
    });
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "flex" },
      React.createElement(InputBox, { onChange: this.changeText }),
      React.createElement(OutputBox, { text: this.state.text })
    );
  }
});

var InputBox = React.createClass({
  displayName: "InputBox",

  getInitialState: function getInitialState() {
    return { value: startString };
  },

  handleChange: function handleChange(event) {
    var text = event.target.value;
    this.setState({ value: text });
    this.props.onChange(text);
  },

  render: function render() {
    return React.createElement("textarea", {
      id: "input",
      value: this.state.value,
      onChange: this.handleChange });
  }
});

var OutputBox = React.createClass({
  displayName: "OutputBox",

  rawMarkup: function rawMarkup() {
    var content = marked(this.props.text);
    return { __html: content };
  },
  render: function render() {
    return React.createElement("div", { id: "output", dangerouslySetInnerHTML: this.rawMarkup() });
  }
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('main'));