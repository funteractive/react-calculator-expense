var React = require('react');

var Item = React.createClass({

  render: function() {
    var item = this.props.item;

    return (
      <li>
        <span>{item.use}（{item.price} 円、{item.name}）</span>
      </li>
    );
  }

});

module.exports = Item;
