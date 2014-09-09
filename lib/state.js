var mercury = require('mercury');

module.exports = function _Data_state (options, events) {

  var data = options.data.map(function (datum) {
    return options.types[datum.type]({
      model: datum,
    }).state;
  });

  return mercury.struct({
    model: mercury.struct({
      types: mercury.value(options.types),
      data: options.viewAs({
        model: data,
      }).state,
      menus: mercury.struct({
        viewAs: require('./menus/view-as')({
          event: events.menuAction,
        }).state,
        sortBy: require('./menus/sort-by')({
          event: events.menuAction,
        }).state,
      }),
    }),
    config: mercury.struct({}),
    events: events,
  });
}
