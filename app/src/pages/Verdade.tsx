import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";
import Loading from "../components/Loading";
import { dataVerdade } from "../dataVerdade";
import PostVerdade from "../images/PostVerdade/PostVerdade.png";
const screenWidth = Dimensions.get("window").width;
import Prox from "../images/Prox/Prox.png";
interface ItData {
  loading: boolean;
  idPost: number;
  captaPost: VoidFunction;
}

export function Verdade({ captaPost, loading, idPost }: ItData) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={PostVerdade}
        resizeMode="stretch"
        style={{ width: screenWidth * 0.95 }}
      />
      <View
        style={{
          position: "absolute",
          top: 135,
          right: 55,
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
            top: 190,
            left: 85,
          },
          { transform: [{ rotate: "-9deg" }] },
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
          Verdade
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#000",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {!loading ? dataVerdade[idPost].message : <Loading />}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
