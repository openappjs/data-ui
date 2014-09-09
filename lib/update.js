module.exports = function _Data_update (options, state) {
  return {
    viewAs: function (viewUi) {
      console.log("view as", viewUi);
    },
    sortBy: function (sortFn) {
      console.log("sort by", sortFn);
    },
  };
};
