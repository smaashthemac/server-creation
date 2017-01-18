// LISTENER & RESPONDER

var http = require("http");

// all caps so it shows up correctly in url
var PORTONE = 7000;
var PORTTWO = 7050;

// using response.library
function handleRequestOne(request, response) {
	response.end("It Works!!!! Path Hit: " + request.url);
	// this response appears in terminal when http url is put into browser
	response.end("OMG YR SO0o0o00oO00ooO BEAUTIFUL AND AMAZING!")
};

function handleRequestTwo(request, response) {
	response.end("It Works!!!! Path Hit: " + request.url);
	// this response appears in terminal when http url is put into browser
	response.end("DUDE, CHECK YR FACE, CAUSE IT'S DUMB.")
};

// using http.library
var serverOne = http.createServer(handleRequestOne);

var serverTwo = http.createServer(handleRequestTwo)

// using server.library
serverOne.listen(PORTONE, function() {
	console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {
	console.log("Server listening on http://localhost:%s", PORTTWO);
})