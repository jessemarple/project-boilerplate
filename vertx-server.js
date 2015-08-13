var vertx = require('vertx'),
	container = require("vertx/container"),
	console = require('vertx/console'),
	eb = require('vertx/event_bus');

var deployHandler = function(err) {
  if (err) {
    console.log("Deployment failed! " + err.getMessage());
  } else {
    console.log("The verticle has been deployed");
	eb.registerHandler('chatty', myHandler);
  }
}

var myHandler = function(msg, replier){
  console.log('vertx has received a message from: ' +msg.userName);
  console.log('the message read: '+ msg.message);
};

container.deployModule("io.vertx~mod-web-server~2.0.0-final", {
  port: 5000,
  ssl: false,
  bridge: true,
  inbound_permitted: [
    { address: 'chatty' }
  ],
  outbound_permitted: [
    { address: 'chatty' }
  ],
}, deployHandler);