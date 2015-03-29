var React = require('react');

var Sum = React.createClass({

  render: function() {
    return <p><strong>合計：</strong>{this.props.sum} 円</p>;
  }

});

module.exports = Sum;
