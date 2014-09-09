module.exports = function _Data_input (options, events, update) {
  events.menuAction(function (action) {
    update[action.name](action.arg);
  });
}
