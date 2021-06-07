import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Logo from "../images/Logo/Logo.png";
import Arrow from "./../images/Arrow/Arrow.png";
export function Header({ isArrow = true }) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        isArrow
          ? { backgroundColor: "rgba(0,0,0,0.9)" }
          : { backgroundColor: "rgba(0,0,0,0.4)" },
      ]}
    >
      <View style={styles.button}>
        {!isArrow && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Arrow} />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.button}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingTop: 20,
  },
  button: { width: 30 },
  logo: { height: 50, width: 120 },
});
