/**
 * Created by IntelliJ IDEA.
 * User: antgrimmitt
 * Date: 29/10/2011
 * Time: 14:22
 * To change this template use File | Settings | File Templates.
 */
var log4js = require("log4js");
//logging
GLOBAL.__log = log4js.getLogger("NodeJS CDN Server");

//var config = configCls.getConfig();

__log.setLevel(__config.logging.logLevel);
