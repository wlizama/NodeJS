// comentario agregado en RamaTestingW
var http = require("http");

http.createServer(function(request, response){
	response.writeHead( 200, { "Content-Type": "text/html" } );
	response.write("<b>Server running...</b>");
	response.end();
}).listen(8888);