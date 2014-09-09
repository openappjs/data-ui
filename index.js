var mercury = require('mercury');
var h = mercury.h;

var Menu = require('menu-ui');

module.exports = Data;

function Data (options) {
  options = options || {};

  var events = mercury.input([]);

  var state = require('./lib/state')(options, events);

  return { state: state };
}

Data.render = require('./lib/render');
