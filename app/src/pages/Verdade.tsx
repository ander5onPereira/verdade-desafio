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
    <View style={styles.container}>
      <Image
        source={PostVerdade}
        resizeMode="stretch"
        style={{ width: screenWidth * 0.95 }}
      />
      <View style={styles.buttonProx}>
        <TouchableOpacity onPress={captaPost}>
          <Image source={Prox} />
        </TouchableOpacity>
      </View>
      <View
        style={[styles.containerMessage, { transform: [{ rotate: "-9deg" }] }]}
      >
        <Text style={styles.textMenssage}>Verdade</Text>
        <Text style={styles.textMenssage}>
          {!loading ? dataVerdade[idPost].message : <Loading />}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textMenssage: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  textTitle: {
    textAlign: "center",
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  containerMessage: {
    width: screenWidth * 0.65,
    position: "absolute",
    top: 210,
    left: 80,
  },
  buttonProx: {
    position: "absolute",
    top: 135,
    right: 55,
    width: 30,
  },
  postImg: { width: screenWidth * 0.95 },
});
