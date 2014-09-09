var mercury = require('mercury');
var h = mercury.h;

var Menu = require('menu-ui');

module.exports = Data;

function Data (options) {
  options = options || {};
  var config = options.config || {};

  var events = mercury.input([]);

  var data = options.data.map(function (datum) {
    return options.types[datum.type]({
      model: datum,
    }).state;
  });

  var viewAs = options.viewAs || require('list-ui');

  var state = mercury.struct({
    types: mercury.value(options.types),
    data: options.viewAs({
      model: data,
    }).state,
    menus: mercury.struct({
      viewAs: require('./menus/view-as')().state,
      sortBy: require('./menus/sort-by')().state,
    }),
    viewAs: mercury.value(viewAs),
    config: mercury.struct({
    }),
    events: events,
  });

  return { state: state };
}

Data.render = require('./lib/render');
