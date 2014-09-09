var Menu = require('menu-ui');

module.exports = function () {
  return Menu({
    model: {
      label: "view as...",
      items: [
        "list",
        "grid",
      ],
    },
    update: {

    },
    input: {
      itemClick: function (update) {
        return function (ev) {
          console.log("viewAs clicked", ev.item);
        };
      },
    },
  });
};
