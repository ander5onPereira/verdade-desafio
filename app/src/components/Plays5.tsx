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
      style={[styles.container, isResult ? { opacity: 0.3 } : { opacity: 1 }]}
    >
      <Text style={[styles.text1p, { transform: [{ rotate: "-10deg" }] }]}>
        {data[0]}
      </Text>
      <Text style={[styles.text2p, { transform: [{ rotate: "-40deg" }] }]}>
        {data[1]}
      </Text>
      <Text style={[styles.text3p, { transform: [{ rotate: "40deg" }] }]}>
        {data[2]}
      </Text>

      <Text style={[styles.text4p, { transform: [{ rotate: "15deg" }] }]}>
        {data[3]}
      </Text>
      <Text style={styles.text5p}>{data[4]}</Text>

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
          { opacity: 1 },
        ]}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text1p: {
    position: "absolute",
    fontSize: 25,
    left: 30,
    top: 210,
  },
  text2p: {
    position: "absolute",
    fontSize: 25,
    top: 70,
    left: 80,
  },
  text3p: {
    position: "absolute",
    fontSize: 25,
    right: 90,
    top: 70,
  },
  text4p: {
    position: "absolute",
    fontSize: 25,
    top: 210,
    right: 40,
  },
  text5p: {
    position: "absolute",
    fontSize: 25,
    top: 300,
  },
  imageGarrafa: {
    position: "absolute",
    width: 40,
  },
});
