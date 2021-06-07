import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { ButtonGreen } from "../components/ButtonGreen";
import Background from "../images/Background/Background.png";
import Logo from "../images/Logo/Logo.png";
import { Input } from "./../components/Input";
export function Home() {
  const navigation = useNavigation();
  function handlerConfig() {
    navigation.navigate("Configuracao");
  }
  return (
    <ImageBackground
      source={Background}
      style={{ flex: 1, justifyContent: "space-around" }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Image source={Logo} style={{ width: "95%" }} />

        <View style={{ width: "75%", marginLeft: -88 }}>
          <ButtonGreen text="Jogar" onPress={handlerConfig} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
