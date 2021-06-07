import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { ButtonGreen } from "../components/ButtonGreen";
import Background from "../images/Background/Background.png";
import Logo from "../images/Logo/Logo.png";
export function Home() {
  const navigation = useNavigation();
  function handlerConfig() {
    navigation.navigate("Configuracao");
  }
  return (
    <ImageBackground source={Background} style={styles.imageBackgroud}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />

        <View style={styles.containerButton}>
          <ButtonGreen text="Jogar" onPress={handlerConfig} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackgroud: { flex: 1, justifyContent: "space-around" },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: { width: "95%" },
  containerButton: { width: "75%", marginLeft: -88 },
});
