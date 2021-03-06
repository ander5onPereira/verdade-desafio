import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import Garrafa from "../images/Garrafa/Garrafa.png";
import SobreMesa2p from "../images/SobreMesa2p/SobreMesa2p.png";
export function Plays2({ graus, data, isResult, angulo, setName }) {
  useEffect(() => {
    console.log(data[0] + ":" + angulo + ":" + data[1]);
    if (angulo > 180 && angulo <= 360) {
      setName(data[0]);
    } else {
      setName(data[1]);
    }
  }, [angulo]);
  return (
    <ImageBackground
      source={SobreMesa2p}
      resizeMode="contain"
      style={[
        styles.imgBackgroud,
        isResult ? { opacity: 0.3 } : { opacity: 1 },
      ]}
    >
      <Text style={styles.text1p}>{data[0]}</Text>

      <Text style={styles.text2p}>{data[1]}</Text>

      <Image
        source={Garrafa}
        resizeMode="contain"
        style={[
          styles.imageGarrafa,
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

const styles = StyleSheet.create({
  imgBackgroud: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageGarrafa: {
    position: "absolute",
    width: 40,
  },
  text2p: {
    position: "absolute",
    fontSize: 25,
    right: 50,
  },
  text1p: {
    position: "absolute",
    fontSize: 25,
    left: 50,
  },
});
