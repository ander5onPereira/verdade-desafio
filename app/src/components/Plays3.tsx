import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import Garrafa from "../images/Garrafa/Garrafa.png";
import SobreMesa3p from "../images/SobreMesa3p/SobreMesa3p.png";
interface ItPlays {
  graus: number;
  data: any;
  isResult: boolean;
  angulo: number;
  setName: VoidFunction;
}
export function Plays3({ graus, data, isResult, angulo, setName }) {
  useEffect(() => {
    if (angulo <= 0 && angulo < 120) {
      setName(data[2]);
    } else if (angulo >= 120 && angulo < 240) {
      setName(data[1]);
    } else {
      setName(data[0]);
    }
  }, [angulo]);
  return (
    <ImageBackground
      source={SobreMesa3p}
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
            top: 120,
            left: 60,
          },
          {
            transform: [
              {
                rotate: `0deg`,
              },
            ],
          },
        ]}
      >
        {data[0]}
      </Text>
      <Text
        style={[
          {
            position: "absolute",
            fontSize: 25,
            right: 70,
            top: 120,
          },
          {
            transform: [
              {
                rotate: `0deg`,
              },
            ],
          },
        ]}
      >
        {data[1]}
      </Text>

      <Text
        style={{
          position: "absolute",
          fontSize: 25,
          top: 290,
        }}
      >
        {data[2]}
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
