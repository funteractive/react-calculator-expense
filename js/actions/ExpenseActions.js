var AppDispatcher = require('../dispatcher/AppDispatcher');
var ExpenseConstants = require('../constants/ExpenseConstants');

var ExpenseActions = {

  create: function(item) {
    AppDispatcher.dispatch({
      actionType: ExpenseConstants.EXPENSE_CREATE,
      item: item
    });
  }

};

module.exports = ExpenseActions;