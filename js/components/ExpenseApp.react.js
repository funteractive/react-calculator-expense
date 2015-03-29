var React = require('react');
var ItemList = require('./ItemList.react');
var Sum = require('./Sum.react');
var Footer = require('./Footer.react');
var ExpenseStore = require('../stores/ExpenseStore');


function getExpenseState() {
  return {
    items: ExpenseStore.getAll(),
    sum: 0
  }
}


var ExpenseApp = React.createClass({

  getInitialState: function() {
    return getExpenseState();
  },

  componentDidMount: function() {
    ExpenseStore.addClickListener(this._onClick);
  },

  componentWillUnmount: function() {
    ExpenseStore.removeClickListener(this._onClick);
  },

  calculateSum: function() {
    var sum = 0;
    if(Object.keys(this.state.items).length) {
      for(var i = 0, len = this.state.items.length; i < len; i++) {
        sum += parseInt(this.state.items[i].price);
      }
    }

    return sum;
  },

  handleSubmit: function(e) {
    e.preventDefault();
  },

  render: function() {
    this.state.sum = this.calculateSum();
    console.log(getExpenseState());

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ItemList items={this.state.items} />
          <Footer items={this.state.items} />
        </form>
        <Sum sum={this.state.sum} />
      </div>
    );
  },

  _onClick: function() {
    this.setState(getExpenseState());
  }

});

module.exports = ExpenseApp;
