var Menu = require('menu-ui');

module.exports = function (options) {
  return Menu({
    model: {
      label: "sort by...",
      items: [{
        label: "A-Z",
        fn: function () {},
      }, {
        label: "Z-A",
        fn: function () {},
      }],
    },
    update: {

    },
    input: {
      itemClick: function (update) {
        return function (ev) {
          console.log("sortAs clicked", ev);
          options.event({
            name: "sortBy",
            arg: ev.item.fn,
          })
        };
      },
    },
  });
};
