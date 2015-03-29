var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ExpenseConstants = require('../constants/ExpenseConstants');
var assign = require('object-assign');

var CLICK_EVENT = 'click';

var _items = {};

function create(item) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _items = {
    id: id,
    use: item.use,
    price: item.price,
    name: item.name
  };
}

var ExpenseStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _items;
  },

  emitClick: function() {
    this.emit(CLICK_EVENT);
  },

  addClickListener: function(callback) {
    this.on(CLICK_EVENT, callback);
  },

  removeClickListener: function(callback) {
    this.removeListener(CLICK_EVENT, callback);
  }

});

AppDispatcher.register(function(action) {
  var item;

  switch (action.actionType) {
    case ExpenseConstants.EXPENSE_CREATE:
      item = action.item;
      if(item != null) {
        create(item);
        ExpenseStore.emitClick();
      }
      break;

    default:
      // no op
  }

});

module.exports = ExpenseStore;