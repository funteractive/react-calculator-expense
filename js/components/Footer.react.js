var React = require('react');
var ExpenseInput = require('./ExpenseInput.react');
var ExpenseActions = require('../actions/ExpenseActions');

var Footer = React.createClass({

  render: function() {
    return (
      <footer>
        <ExpenseInput items={this.props.items} onSave={this._onSave} />
        <p><input type="submit" className="btn btn-primary" value="申請する" /></p>
      </footer>
    );
  },

  _onSave: function(item) {
    ExpenseActions.create(item);
  }

});

module.exports = Footer;