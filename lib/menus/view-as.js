var mercury = require('mercury');

var Menu = require('menu-ui');

module.exports = function (options) {
  return Menu({
    model: {
      label: "view as...",
      items: [{
        label: "list",
        ui: mercury.value(require('list-ui')),
      }, {
        label: "grid",
        ui: mercury.value(require('grid-ui')),
      }]
    },
    update: {

    },
    input: {
      itemClick: function (update) {
        return function (ev) {
          console.log("viewAs clicked", ev.item);
          options.event({
            name: "viewAs",
            arg: ev.item.ui,
          })
        };
      },
    },
  });
};
