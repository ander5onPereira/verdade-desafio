import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";
const screenWidth = Dimensions.get("window").width;
import PostDesafio from "../images/PostDesafio/PostDesafio.png";
import Prox from "../images/Prox/Prox.png";
import Loading from "../components/Loading";
import { dataDesafio } from "../dataDesafio";
interface ItData {
  loading: boolean;
  idPost: number;
  captaPost: VoidFunction;
}

export function Desafio({ captaPost, loading, idPost }: ItData) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={PostDesafio}
        resizeMode="stretch"
        style={{ width: screenWidth * 0.95 }}
      />
      <View
        style={{
          position: "absolute",
          top: 130,
          right: 45,
          width: 30,
        }}
      >
        <TouchableOpacity onPress={captaPost}>
          <Image source={Prox} />
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            width: screenWidth * 0.65,
            position: "absolute",
            top: 210,
            left: 80,
          },
          { transform: [{ rotate: "-6deg" }] },
        ]}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#000",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Desafio
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#000",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {!loading ? dataDesafio[idPost].message : <Loading />}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
