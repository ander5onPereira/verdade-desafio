import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import AppLoading from "expo-app-loading";
import { Home } from "./src/pages/Home";
import { Configuracao } from "./src/pages/Configuracao";
import { Mesa } from "./src/pages/Mesa";
import { Acao } from "./src/pages/Acao";
import { Routes } from "./src/routes";
export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
    // <ImageBackground source={Background} style={{}}>
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //   </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
