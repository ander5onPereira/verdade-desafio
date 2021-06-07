import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";
import backButton from "../images/ButtonBackground/ButtonOrange.png";
interface ItButton extends TouchableOpacityProps {
  text: string;
  isResult: boolean;
}
export function ButtonOrange({ text, isResult, ...rest }: ItButton) {
  return (
    <TouchableOpacity {...rest}>
      <ImageBackground
        source={backButton}
        resizeMode="stretch"
        style={[
          {
            height: 70,
            alignItems: "center",
            justifyContent: "center",
          },
          isResult && { display: "none" },
        ]}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 35,
            fontWeight: "bold",
          }}
        >
          {text}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
