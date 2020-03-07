"use strict";

var globalVar = {};
var Parent = React.createClass({
  displayName: "Parent",

  componentWillMount: function componentWillMount() {
    if (!localStorage.recipes) {
      this.setState({
        recipes: [["Dinner", "beets and carrots"], ["Grilled Cheese", "Cheese and Grills"], ["Sandwiches", "Bread, mayo and some pickles"]]
      });
    } else {
      this.update();
    }
  },

  update: function update() {
    var state = JSON.parse(localStorage.recipes);
    this.setState({
      recipes: state
    });
  },

  onClickHandle: function onClickHandle() {
    var newName = $("#recipe-name").val();
    var newText = $("#recipe-text").val();
    var state = this.state.recipes;
    state.push([newName, newText]);
    this.setState({ recipes: state });
    localStorage.recipes = JSON.stringify(this.state.recipes);
  },

  onClickDeleteHandle: function onClickDeleteHandle(e) {
    var index = e.target.id;
    var state = this.state.recipes;
    state.splice(index, 1);
    this.setState({ recipes: state });
    localStorage.recipes = JSON.stringify(this.state.recipes);
  },

  onClickEditHandle: function onClickEditHandle(e) {
    var index = e.target.id;
    $("#edit-name").val($("div#" + index).html());
    $("#edit-text").val($("p#-" + index).html());
    $('#edit-modal').openModal({
      dismissible: false,
      complete: function () {
        var state = JSON.parse(localStorage.recipes);
        state[index][0] = $("#edit-name").val();
        state[index][1] = $("#edit-text").val();
        localStorage.recipes = JSON.stringify(state);
        this.update();
      }.bind(this)
    });
  },

  render: function render() {
    var array = [];
    for (var i = 0; i < this.state.recipes.length; i++) {
      array.push(React.createElement(Recipe, { index: i, recipeName: this.state.recipes[i][0], recipeText: this.state.recipes[i][1], onClickDelete: this.onClickDeleteHandle, onClickEdit: this.onClickEditHandle }));
    }
    return React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        { className: "collapsible", "data-collapsible": "accordion" },
        array
      ),
      React.createElement(NewRecipe, { onClick: this.onClickHandle })
    );
  }
});

var Recipe = React.createClass({
  displayName: "Recipe",

  render: function render() {

    return React.createElement(
      "li",
      null,
      React.createElement(
        "div",
        { id: this.props.index, className: "collapsible-header" },
        this.props.recipeName
      ),
      React.createElement(
        "div",
        { className: "collapsible-body" },
        React.createElement(
          "p",
          { id: "-" + this.props.index },
          this.props.recipeText
        ),
        React.createElement(
          "button",
          { id: this.props.index, className: "btn-flat delete", onClick: this.props.onClickDelete },
          "Delete"
        ),
        React.createElement(
          "button",
          { id: this.props.index, onClick: this.props.onClickEdit, className: "btn-flat edit" },
          "Edit"
        )
      )
    );
  }
});

var NewRecipe = React.createClass({
  displayName: "NewRecipe",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { id: "recipe-name", type: "text" }),
      React.createElement("input", { id: "recipe-text", type: "text" }),
      React.createElement(
        "button",
        { className: "btn waves-effect waves-green", onClick: this.props.onClick },
        "Add New Recipe"
      )
    );
  }
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));