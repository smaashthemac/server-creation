// LISTENER & RESPONDER

var http = require("http");

// all caps so it shows up correctly in url
var PORT1 = 7000;
var PORT2 = 7050;

// using response.library
function handleRequest(request, response) {
	response.end("It Works!!!! Path Hit: " + request.url);
};

// using http.library
var server = http.createServer(handleRequest);

// using server.library
server.listen(PORT1, function() {
	//console.log("Server listening on: http://localhost:%s", PORT1);
	console.log("OMG YR SO0o0o00oO00ooO BEAUTIFUL AND AMAZING!")
});

server.listen(PORT2, function() {
	//console.log("Server listening on http://localhost:%s", PORT2);
	console.log("DUDE, CHECK YR FACE, CAUSE IT'S DUMB.")
})