var Settings = require("settings");
//config
GLOBAL.__config = null;
const configFile = __base_dir + '/config/environments.js';
console.log(configFile);
try {
    __config = new Settings(configFile).getEnvironment("development");
} catch (e) {
    console.log("wrong file");
}



/**
var logging = require("../utils/logging");
var log = logging.getLog();
//console.log(log);


function getConfig()  {
    return config;
}

**/