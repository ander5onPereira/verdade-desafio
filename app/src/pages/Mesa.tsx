import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Background from "../images/Background/Background.png";
import { ButtonGreen } from "./../components/ButtonGreen";
import { ButtonOrange } from "./../components/ButtonOrange";
import { Header } from "./../components/Header";
import { Plays2 } from "./../components/Play2";
import { Plays3 } from "./../components/Plays3";
import { Plays4 } from "./../components/Plays4";
import { Plays5 } from "./../components/Plays5";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export function Mesa({ route }: any) {
  const navigation = useNavigation();
  const [graus, setGraus] = useState(0);
  const [soma, setSoma] = useState(1);
  const [maxGrau, setMaxGrau] = useState(1);
  const [isRodar, setIsRodar] = useState(false);
  const [elemetos, setElementos] = useState<Array<string>>(route.params.dado);
  const [isResult, setIsResult] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isRodar) {
        setSoma(3);
        setGraus(graus + soma);
        if (graus >= maxGrau) {
          setIsRodar(false);
          setIsResult(true);
          setGraus(maxGrau);
        }
      }
    }, 0.5);
    return () => clearTimeout(timer);
  }, [graus, maxGrau]);
  function rederElemento(isResult: boolean) {
    if (elemetos.length == 2) {
      return (
        <Plays2
          graus={graus}
          data={elemetos}
          isResult={isResult}
          angulo={maxGrau - 360}
          setName={setName}
        />
      );
    } else if (elemetos.length == 3) {
      return (
        <Plays3
          graus={graus}
          data={elemetos}
          isResult={isResult}
          angulo={maxGrau - 360}
          setName={setName}
        />
      );
    } else if (elemetos.length == 4) {
      return (
        <Plays4
          graus={graus}
          data={elemetos}
          isResult={isResult}
          angulo={maxGrau - 360}
          setName={setName}
        />
      );
    } else {
      return (
        <Plays5
          graus={graus}
          data={elemetos}
          isResult={isResult}
          angulo={maxGrau - 360}
          setName={setName}
        />
      );
    }
  }
  function getRandomIntInclusive(min = 90, max = 360) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleRodar() {
    var valor = getRandomIntInclusive();
    setGraus(0);
    setMaxGrau(valor + 360);
    setIsRodar(true);
  }
  function handleVerdade() {
    setIsResult(false);
    navigation.navigate("Acao", { acao: "verdade" });
  }
  function handleDesafio() {
    setIsResult(false);
    navigation.navigate("Acao", { acao: "desafio" });
  }
  function acao() {
    if (isResult) {
      return (
        <View style={styles.containerOption}>
          <View>
            <Text style={styles.title}>
              {name}
              {"\n"}
            </Text>
          </View>
          <View style={styles.containerButtons}>
            <View style={styles.button}>
              <ButtonOrange
                text="Verdade"
                isResult={!isResult}
                onPress={handleVerdade}
              />
            </View>
            <View style={styles.button}>
              <ButtonGreen text="Desafio" onPress={handleDesafio} />
            </View>
          </View>
        </View>
      );
    }
  }
  return (
    <ImageBackground source={Background} style={styles.imageBackgroud}>
      <View
        style={[
          styles.imageBackgroud,
          isResult && { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        ]}
      >
        <View style={styles.containerHeader}>
          <Header isArrow={isResult} />
        </View>

        <View style={styles.containerSobreMesa}>
          {rederElemento(isResult)}
          {acao()}
        </View>
        <View style={styles.constainerButton}>
          <ButtonOrange
            text="Rodar"
            isResult={isResult}
            onPress={handleRodar}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackgroud: { flex: 1 },
  containerHeader: {
    height: "12%",
    width: "100%",
  },
  containerSobreMesa: {
    height: "65%",
    paddingVertical: 40,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  constainerButton: {
    width: "100%",
    paddingVertical: 10,
    height: "20%",
    paddingLeft: screenWidth * 0.4,
  },
  containerOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  title: { color: "#fff", fontSize: 35, fontWeight: "bold" },
  containerButtons: { flex: 1, flexDirection: "row" },
  button: { width: screenWidth * 0.45, marginHorizontal: 5 },
});
