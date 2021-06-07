import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ToastAndroid from "react-native-tiny-toast";
import { ButtonGreen } from "../components/ButtonGreen";
import { Input } from "../components/Input";
import Background from "../images/Background/Background.png";
import { Header } from "./../components/Header";
export function Configuracao() {
  const navigation = useNavigation();
  const [qtdPlayers, setQtdPlayers] = useState(2);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [player5, setPlayer5] = useState("");
  const showToastWithGravity = (message: String) => {
    ToastAndroid.show(`${message}`, {
      position: ToastAndroid.position.CENTER,
      duration: ToastAndroid.duration.SHORT,
    });
  };

  function handlerInicio() {
    const dado = [];
    if (player1 != "") dado.push(player1);
    if (player2 != "") dado.push(player2);
    if (player3 != "") dado.push(player3);
    if (player4 != "") dado.push(player4);
    if (player5 != "") dado.push(player5);
    if (dado.length >= 2) {
      navigation.navigate("Mesa", { dado });
    } else {
      showToastWithGravity("Mínimo 2 playes");
    }
  }
  function addPlayer() {
    setQtdPlayers(qtdPlayers + 1);
  }
  return (
    <ImageBackground source={Background} style={styles.imageBackgroud}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View style={styles.containerHeader}>
            <Header isArrow={false} />
          </View>
          <View style={styles.containerInputs}>
            <View style={styles.containerInput2p}>
              <View style={styles.input}>
                <Input text="PLAYER 1" onChangeText={setPlayer1} />
              </View>
            </View>

            <View style={styles.containerInput}>
              <View style={styles.input}>
                <Input text="PLAYER 2" onChangeText={setPlayer2} />
              </View>
            </View>
            {qtdPlayers >= 3 ? (
              <View style={styles.containerInput}>
                <View style={styles.input}>
                  <Input text="PLAYER 3" onChangeText={setPlayer3} />
                </View>
              </View>
            ) : (
              <></>
            )}
            {qtdPlayers >= 4 ? (
              <View style={styles.containerInput}>
                <View style={styles.input}>
                  <Input text="PLAYER 4" onChangeText={setPlayer4} />
                </View>
              </View>
            ) : (
              <></>
            )}
            {qtdPlayers >= 5 ? (
              <View style={styles.containerInput}>
                <View style={styles.input}>
                  <Input text="PLAYER 5" onChangeText={setPlayer5} />
                </View>
              </View>
            ) : (
              <View style={styles.containerButtunAdd}>
                <View style={styles.input}>
                  <TouchableOpacity
                    onPress={addPlayer}
                    style={styles.buttonAdd}
                  >
                    <Text style={styles.textButtonAdd}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          <View style={styles.containerButton}>
            <ButtonGreen text="Próximo" onPress={handlerInicio} />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackgroud: {
    flex: 1,
  },
  containerHeader: {
    height: "12%",
    width: "100%",
  },
  containerInputs: {
    height: "65%",
    paddingVertical: 40,
  },
  containerInput2p: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: { width: "90%" },
  containerButton: {
    width: "75%",
    paddingVertical: 10,
    height: "20%",
  },
  containerButtunAdd: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonAdd: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    height: 56,
    width: "100%",
  },
  textButtonAdd: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 36,
    color: "rgba(0,0,0,0.4)",
  },
});
