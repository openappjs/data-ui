var mercury = require('mercury');
var h = mercury.h;


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

  var state = mercury.struct({
    types: mercury.value(options.types),
    data: options.viewAs({
      model: data,
    }).state,
    viewAs: mercury.value(options.viewAs || require('list-ui')),
    config: mercury.struct({
    }),
    events: events,
  });

  return { state: state };
}

Data.render = function _Data_render (state) {
  return h("div.data.ui", {}, [
    h('div.controls', {}, [
      h('div.query', {}, [
      ]),
    
    ]),
    h('div.data', {}, [
      state.viewAs.render(state.data),
    ]),
  ])
};
