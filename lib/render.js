var mercury = require('mercury');
var h = mercury.h

module.exports = function _Data_render (state) {

  var model = state.model;
  var menus = model.menus;

  return h("div.data.ui", {}, [
    h('div.controls', {}, [
      h('div.query', {}, [
      ]),
      h('div.viewAs', {}, [
        menus.viewAs.render(menus.viewAs)
      ]),
      h('div.sortBy', {}, [
        menus.sortBy.render(menus.sortBy)
      ]),
    
    ]),
    h('div.data', {}, [
      menus.viewAs.model.items[0].ui.render(model.data),
    ]),
  ])
};
