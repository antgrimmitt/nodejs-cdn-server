/**
 * Created by IntelliJ IDEA.
 * User: antgrimmitt
 * Date: 30/10/2011
 * Time: 12:32
 * To change this template use File | Settings | File Templates.
 */
var fileIO = require("fs");
var gzip = require('gzip');

function serveFile(pathname, callback) {
    var dataO = null;
    fileIO.readFile(pathname, function(err, data) {
        if (err) {
            __log.error("couldn't read file %s", err);
        }

        dataO = data;
    });
    var compressedPackage = gzip(dataO, function(err, gzdata) {
        if (err) {
            __log.error("unable to compress file");
        }

        if (callback && typeof(callback) == "function") {
            callback(null, gzdata);
        }
    });

}

exports.serveFile = serveFile;
