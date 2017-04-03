var http = require("http"); // llamada al modulo http
var url  = require("url");

function iniciar(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Peticion para " + pathname + " recibida.");

		// response.writeHead(200, { "Content-Type" : "text/html" });
		route(handle, pathname, response);
		// response.write(content);
		// response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;