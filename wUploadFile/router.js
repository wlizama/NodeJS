function route(handle, pathname, response){
	console.log("A punto de rutear una petición para " + pathname);

	if (typeof handle[pathname] === "function") {
		return handle[pathname](response);
	}
	else{
		console.log("No se encontro Manipulador para " + pathname);
		response.writeHead(404, { "Content-Type" : "text/html" });
		response.write("404 no encontrado");
		response.end();
	}
}

exports.route = route;