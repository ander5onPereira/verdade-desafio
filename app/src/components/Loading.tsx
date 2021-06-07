import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Loading = ({ props, children }: any) => {
  return (
    <ActivityIndicator size="small" color="#999" style={styles.component} />
  );
};

export default Loading;

const styles = StyleSheet.create({
  component: {
    marginVertical: 30,
  },
});
