#include <ArduinoJson.h>
#include <TinyGPSPlus.h>
// #include <SoftwareSerial.h>
// #include <MqttClient.h>
// #include <ESP8266WiFi.h>

#define IRPIN_IN 9
#define IRPIN_OUT 10

StaticJsonDocument<200> doc;
TinyGPSPlus gps;
// SoftwareSerial ss(4, 3);
// WiFiClient wifiClient;
// MqttClient mqttClient(wifiClient);
int totalPas = 0;

void setup()
{
    Serial.begin(115200);
    // ss.begin(4800);
    pinMode(IRPIN_IN, INPUT);
    pinMode(IRPIN_OUT, INPUT);
}
void loop()
{
    float lat = gps.location.lat();
    float lon = gps.location.lng();
    if(digitalRead(IRPIN_IN) == HIGH){
        totalPas++;
    }
    if(digitalRead(IRPIN_OUT) == HIGH){
        totalPas--;
    }
    if (Serial.available() > 0)
    {
        char req = Serial.read();
        if (req == 'L')
        {
            doc.clear();
            JsonObject loc = doc.createNestedObject("location");
            loc["latitude"] = lat;
            loc["longitude"] = lon;
            serializeJson(doc, Serial);
            Serial.println();
        }
        if (req == 'R')
        {
            doc.clear();
            JsonObject rider = doc.createNestedObject("ridership");
            rider["total"] = totalPas;
            serializeJson(doc, Serial);
            Serial.println();
        }
    }
}