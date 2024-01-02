const del = require("del"); // TODO update version

// config
const path = require("../config/path.js");

// delete dir
const clear = () => {
  return del(path.root);
};

module.exports = clear;
