exports.getConfig = function(params, callback) {
  var cfg = require("./config.js");
  return callback(null, {config: cfg.config});
};
