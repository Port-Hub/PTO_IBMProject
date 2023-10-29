#include <ArduinoJson.h>
#include <TinyGPSPlus.h>
#include <ArduinoMqttClient.h>
#include <ESP8266WiFi.h>

#define IRPIN_IN 9
#define IRPIN_OUT 10

StaticJsonDocument<100> doc;
TinyGPSPlus gps;
WiFiClient wifiClient;
MqttClient mqttClient(wifiClient);

const char broker[] = "192.168.198.179";
int port = 1883;
const char topic[] = "pto_data";
int totalPas = 0;

void setup() {
  Serial.begin(115200);
  pinMode(IRPIN_IN, INPUT);
  pinMode(IRPIN_OUT, INPUT);
  Serial.print("Connecting to WiFi");
  WiFi.begin("Rahul's Galaxy S20+","Rahul@123");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  if (!mqttClient.connect(broker, port)) {
    Serial.print("MQTT connection failed! Error code = ");
    Serial.println(mqttClient.connectError());

    while (1)
      ;
  }
  Serial.println("You're connected to the MQTT broker!");
  Serial.println();
}
void loop() {
  mqttClient.poll();
  mqttClient.beginMessage(topic);
  float lat = gps.location.lat();
  float lon = gps.location.lng();
  doc.clear();
  JsonObject loc = doc.createNestedObject("location");
  loc["latitude"] = lat;
  loc["longitude"] = lon;
  if (digitalRead(IRPIN_IN) == HIGH) {
    totalPas++;
  }
  if (digitalRead(IRPIN_OUT) == HIGH) {
    totalPas--;
  }
  JsonObject rider = doc.createNestedObject("ridership");
  rider["total"] = totalPas;
  serializeJson(doc, mqttClient);
  mqttClient.endMessage();
  delay(10000);
}