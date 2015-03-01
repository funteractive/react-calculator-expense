var React = require('react');

var ItemList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return (
        <li>
          <span>{item.use}（{item.price} 円、{item.name}）</span>
        </li>
      );
    };

    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var Sum = React.createClass({
  render: function() {
    return <p><strong>合計：</strong>{this.props.sum} 円</p>;
  }
});

var Form = React.createClass({
  getDefaultProps: function() {
    return ({
      initialCount: 1
    });
  },
  getInitialState: function() {
    return ({
      items: []
    });
  },
  onChangeUse: function(e) {
    this.setState({ use: e.target.value });
  },
  onChangePrice: function(e) {
    this.setState({ price: e.target.value });
  },
  onChangeName: function(e) {
    this.setState({ name: e.target.value });
  },
  calculateSum: function(items) {
    var sum = 0;
    for(var i = 0, len = items.length; i < len; i++) {
      sum += parseInt(items[i].price);
    }

    return sum;
  },
  onClick: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat({ use: this.state.use, price: this.state.price, name: this.state.name });
    var sum = this.calculateSum(nextItems);
    this.setState({
      items: nextItems,
      use: '',
      price: '',
      name: '',
      sum: sum
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ItemList items={this.state.items} />
          <input type="text" name="use" placeholder="品目" value={this.state.use} onChange={this.onChangeUse} />
          <input type="number" name="price" placeholder="値段" value={this.state.price} onChange={this.onChangePrice} />
          <input type="text" name="name" placeholder="名前" value={this.state.name} onChange={this.onChangeName} />
          <p><button type="button" className="btn btn-default" onClick={this.onClick}>追加</button></p>
          <p><input type="submit" className="btn btn-primary" value="申請する" /></p>
        </form>
        <Sum sum={this.state.sum} />
      </div>
    );
  }
});

React.render(<Form />, document.getElementById('inputForm'));