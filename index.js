GLOBAL.__base_dir = __dirname;
require("./utils/configuration.js");  // this gives us __config
require("./utils/logging.js");     // this gives us __log

var server = require("./app/server");
__log.info("Starting Server");
server.init();
