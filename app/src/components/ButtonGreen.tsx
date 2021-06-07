import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";
import backButton from "../images/ButtonBackground/ButtonBackground.png";
interface ItButtonGreen extends TouchableOpacityProps {
  text: string;
}
export function ButtonGreen({ text, ...rest }: ItButtonGreen) {
  return (
    <TouchableOpacity {...rest}>
      <ImageBackground
        source={backButton}
        resizeMode="stretch"
        style={styles.imageButton}
      >
        <Text style={styles.textButton}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
});
