import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { ButtonGreen } from "../components/ButtonGreen";
import Background from "../images/Background/Background.png";
import { Header } from "./../components/Header";
import { Desafio } from "./Desafio";
import { Verdade } from "./Verdade";
const screenWidth = Dimensions.get("window").width;
interface ItData {
  id: number;
  message: string;
}
export function Acao({ isResult = true, route }) {
  const navigation = useNavigation();
  const [acao, setAcao] = useState(route.params.acao);
  const [loading, setLoading] = useState(true);
  const [idPost, setIdPost] = useState(null);
  function getRandomIntInclusive(min = 0, max = 38) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function captaPost() {
    var valor = getRandomIntInclusive();
    setIdPost(valor);
  }
  useEffect(() => {
    captaPost();
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [idPost]);

  function handleProximo() {
    navigation.goBack();
  }

  return (
    <ImageBackground source={Background} style={{ flex: 1 }}>
      <View
        style={[
          { flex: 1 },
          isResult && { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        ]}
      >
        <View
          style={{
            height: "12%",
            width: "100%",
          }}
        >
          <Header />
        </View>

        {acao == "desafio" ? (
          <Desafio loading={loading} idPost={idPost} captaPost={captaPost} />
        ) : (
          <Verdade loading={loading} idPost={idPost} captaPost={captaPost} />
        )}

        <View style={{ bottom: 60, width: screenWidth * 0.7 }}>
          <ButtonGreen text="Próximo" onPress={handleProximo} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
