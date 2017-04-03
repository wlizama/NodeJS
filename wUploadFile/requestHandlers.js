var exec = require("child_process").exec;

function iniciar(){
	console.log("Manipulador de petición 'iniciar' ha sido llamado.");
	/* MOD */
	// function sleep(milliSeconds){
	// 	// obten la hora actual
	// 	var startTime = new Date().getTime();
	// 	// atasca la CPU
	// 	while(new Date().getTime() < startTime + milliSeconds);
	// }
	// sleep(10000);
	/* fin MOD */
	// return "Hola Iniciar";

	exec("ls -lah", function (error, stdout, stderr) {
		// body...
	});




}

function subir() {
	console.log("Manipulador de petición 'subir' ha sido llamado.");
	return "Hola Subir";
}

exports.iniciar = iniciar;
exports.subir   = subir;