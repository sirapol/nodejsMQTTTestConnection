const mqtt = require("mqtt");

var maxConnection = 100

console.log("MQTT start ...");

aryMqttOption = [];
for (var x = 0; x < maxConnection; x++) {
  aryMqttOption.push({
    port: 1883,
    host: "mqtt://hostname",
    clientId: "1",
    username: "user",
    password: "pass",
    keepalive: 60,
    reconnectPeriod: 5000,
    clean: true,
  });
}

aryMqttClient = [];
for (var x = 0; x < maxConnection; x++) {
  var xxx = mqtt.connect(aryMqttOption[x].host, aryMqttOption[x]);
  aryMqttClient[x] = xxx;
  aryMqttClient[x].publish("testConnection/"+x.toString(), "Hello mqtt");
}

console.table(aryMqttClient);