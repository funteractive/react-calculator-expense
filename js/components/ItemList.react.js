var React = require('react');

var ItemList = React.createClass({

  render: function() {
    var createItem = function(item) {
      return (
        <Item item={item} />
      );
    };

    var items = {};
    if (Object.keys(items).length) {
      items = this.props.items.map(createItem)
    }

    return <ul>{items}</ul>;
  }

});

module.exports = ItemList;
