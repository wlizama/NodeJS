var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var puerto = 3179;
var users = [];

app.get('/', function(request, response){
	response.sendfile('index.html');
});

io.on('connection', function(socket){
	console.log('A user connected');
	socket.on('setUsername', function(data){
		console.log(data);
		if(users.indexOf(data) > -1){
			socket.emit('userExists', data + ' username is taken! Try some other username.');
		}
		else{
			users.push(data);
			socket.emit('userSet', {username: data});
		}
	});
	socket.on('msg', function(data){
		//Send message to everyone
		io.sockets.emit('newmsg', data);
	});
});

http.listen(puerto, function(){
	console.log('listening on localhost:' + puerto);
});