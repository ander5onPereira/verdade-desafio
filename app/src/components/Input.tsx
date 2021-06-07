import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
interface Input extends TextInputProps {
  text: string;
}
export function Input({ text, ...rest }: Input) {
  return (
    <TextInput {...rest} placeholder={text} style={styles.input}></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    height: 46,
    width: "100%",
    fontSize: 30,
  },
});
