import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import Garrafa from "../images/Garrafa/Garrafa.png";
import SobreMesa4p from "../images/SobreMesa4p/SobreMesa4p.png";
export function Plays4({ graus, data, isResult, angulo, setName }) {
  useEffect(() => {
    if (angulo <= 315 && angulo < 45) {
      setName(data[1]);
    } else if (angulo >= 45 && angulo < 135) {
      setName(data[2]);
    } else if (angulo >= 135 && angulo < 225) {
      setName(data[3]);
    } else {
      setName(data[0]);
    }
  }, [angulo]);
  return (
    <ImageBackground
      source={SobreMesa4p}
      resizeMode="contain"
      style={[
        {
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
        isResult ? { opacity: 0.3 } : { opacity: 1 },
      ]}
    >
      <Text
        style={[
          {
            position: "absolute",
            fontSize: 25,
            left: 10,
          },
          { transform: [{ rotate: "-90deg" }] },
        ]}
      >
        {data[0]}
      </Text>
      <Text
        style={[
          {
            position: "absolute",
            fontSize: 25,
            right: 10,
          },
          { transform: [{ rotate: "90deg" }] },
        ]}
      >
        {data[2]}
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: 25,
          top: 40,
        }}
      >
        {data[1]}
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: 25,
          top: 300,
        }}
      >
        {data[3]}
      </Text>

      <Image
        source={Garrafa}
        resizeMode="contain"
        style={[
          {
            position: "absolute",
            width: 40,
          },
          {
            transform: [
              {
                rotate: `${graus}deg`,
              },
            ],
          },
        ]}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
