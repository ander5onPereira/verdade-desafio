import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import Garrafa from "../images/Garrafa/Garrafa.png";
import SobreMesa5p from "../images/SobreMesa5p/SobreMesa5p.png";
export function Plays5({ graus, data, isResult, angulo, setName }) {
  useEffect(() => {
    if (angulo <= 0 && angulo < 72) {
      setName(data[2]);
    } else if (angulo >= 72 && angulo < 144) {
      setName(data[3]);
    } else if (angulo >= 144 && angulo < 216) {
      setName(data[4]);
    } else if (angulo >= 216 && angulo < 288) {
      setName(data[0]);
    } else {
      setName(data[1]);
    }
  }, [angulo]);
  return (
    <ImageBackground
      source={SobreMesa5p}
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
            left: 30,
            top: 210,
          },
          { transform: [{ rotate: "-10deg" }] },
        ]}
      >
        {data[0]}
      </Text>
      <Text
        style={[
          {
            position: "absolute",
            fontSize: 25,
            top: 70,
            left: 80,
          },
          { transform: [{ rotate: "-40deg" }] },
        ]}
      >
        {data[1]}
      </Text>
      <Text
        style={[
          {
            position: "absolute",
            fontSize: 25,
            right: 90,
            top: 70,
          },
          { transform: [{ rotate: "40deg" }] },
        ]}
      >
        {data[2]}
      </Text>

      <Text
        style={[
          {
            position: "absolute",
            fontSize: 25,
            top: 210,
            right: 40,
          },
          { transform: [{ rotate: "15deg" }] },
        ]}
      >
        {data[3]}
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: 25,
          top: 300,
        }}
      >
        {data[4]}
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
          { opacity: 1 },
        ]}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
