// var app = require('express')();
// var http = require('http').Server(app);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// http.listen(3000, function(){
//   console.log('Server at localohost:3000');
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//Выполняется при коннекте
io.on('connection', function (socket) {
  console.log('A user connected');
  //Выполняется при дисконнекте
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });
});

http.listen(3000, function () {
  console.log('Server at localohost:3000');
});
