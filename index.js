var mercury = require('mercury');
var h = mercury.h;

var SelectUi = require('fancy-select');

module.exports = Data;

function Data (options) {
  options = options || {};
  var config = options.config || {};


  var events = mercury.input([]);

  var state = mercury.struct({
    query: SelectUi(options.select).state,
    data: mercury.array(options.data),
    config: mercury.struct({
      viewAs: mercury.value(config.viewAs || null),
    }),
    events: events,
  });

  return { state: state };
}

Data.render = function _Data_render (state) {
  return h("div.data.ui", {}, [
    h('div.controls', {}, [
      h('div.query', {}, [
        SelectUi.render(state.query),
      ]),
    
    ]),
    h('div.data', {}, [
    
    ]),
  ])
};
