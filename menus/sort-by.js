var Menu = require('menu-ui');

module.exports = function () {
  return Menu({
    model: {
      label: "sort by...",
      items: [
        "A-Z",
        "Z-A",
      ],
    },
    update: {

    },
    input: {
      itemClick: function (update) {
        return function (ev) {
          console.log("sortAs clicked", ev.item);
        };
      },
    },
  });
};
