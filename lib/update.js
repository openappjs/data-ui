module.exports = function _Data_update (options, state) {
  return {
    viewAs: function (viewUi) {
      //var data = state.model.data();
      //state.model.data.set(viewUi(data).state);
      //console.log("data", data);
      console.log("view as", viewUi);
    },
    sortBy: function (sortFn) {
      console.log("sort by", sortFn);
    },
  };
};
