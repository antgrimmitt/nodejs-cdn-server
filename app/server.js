//importing modules
var httpserver = require("http");
var url = require("url");
var fileOperation = require('../utils/fileOperations');


function init() {
    function onRequest(request, response) {
        var pathname = __config.service.wwwroot + url.parse(request.url).pathname;
        __log.debug("received request for route " + pathname);

        var data = fileOperation.serveFile(pathname, function(err, data) {
            __log.info(data);
            response.writeHead("200", {
                "content-type" : "text-plain",
                "content-encoding": "gzip"
            });

            response.write(data);
            response.end();

        });




    }

    httpserver.createServer(onRequest).listen(__config.service.port);
    __log.info("Server Started. on port " + __config.service.port);
}


exports.init = init;