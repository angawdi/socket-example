// require stuff and set up app
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Define route 
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


// Define socket 
io.on('connection', function(socket){
	console.log('A new connection!');

	socket.on('chat message', function(msg){
		// Q: What to do if you receive a message from
		// one of the clients?
		// A: I need to tell the other clients about this message
		io.emit('chat message', msg);
	});

	// If you want to take any action on disconnection, do so here
	socket.on('disconnect', function(){
		console.log('someone disconnected!');
	});
});
//Listen on port 3000


http.listen(3000);