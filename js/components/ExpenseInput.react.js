var React = require('react');
var ReactPropTypes = React.PropTypes;
var ExpenseActions = require('../actions/ExpenseActions');

var ExpenseInput = React.createClass({

  propTypes: {
    use: ReactPropTypes.string,
    price: ReactPropTypes.number,
    name: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      use: this.use || '',
      price: this.price || '',
      name: this.name || ''
    }
  },

  render: function() {
    return (
      <form>
        <input type="text" name="use" placeholder="品目" value={this.state.use} onChange={this._onChangeUse} />
        <input type="number" name="price" placeholder="値段" value={this.state.price} onChange={this._onChangePrice} />
        <input type="text" name="name" placeholder="名前" value={this.state.name} onChange={this._onChangeName} />
        <p><button type="button" className="btn btn-default" onClick={this._save}>追加</button></p>
      </form>
    );
  },

  _save: function(e) {
    e.preventDefault();
    var item = {
      use: this.state.use,
      price: this.state.price,
      name: this.state.name
    };
    this.props.onSave(item);
  },

  _onChangeUse: function(e) {
    this.setState({ use: e.target.value });
  },

  _onChangePrice: function(e) {
    this.setState({ price: e.target.value });
  },

  _onChangeName: function(e) {
    this.setState({ name: e.target.value });
  }

});

module.exports = ExpenseInput;
