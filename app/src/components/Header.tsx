import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Arrow from "./../images/Arrow/Arrow.png";
import Logo from "../images/Logo/Logo.png";
import { useNavigation } from "@react-navigation/native";
export function Header({ isArrow = true }) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",

          borderBottomWidth: 1,
          borderBottomColor: "#fff",
          paddingTop: 20,
        },
        isArrow
          ? { backgroundColor: "rgba(0,0,0,0.9)" }
          : { backgroundColor: "rgba(0,0,0,0.4)" },
      ]}
    >
      <View style={{ width: 30 }}>
        {!isArrow && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Arrow} />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Image
          source={Logo}
          style={{ height: 50, width: 120 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ width: 30 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
