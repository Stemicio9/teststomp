var express = require('express');
var router = express.Router();

var http = require("http");
var StompServer = require('stomp-broker-js');

var server = http.createServer();
const stompServer = new StompServer({
  server: server,
  debug: console.log,
  path: '/ws',
  protocol: 'sockjs',
  heartbeat: [2000,2000]
});

server.listen(3030, 'localhost');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/send', function(req, res, next) {
   stompServer.send('/test', {}, 'Ciao');
});

module.exports = router;
