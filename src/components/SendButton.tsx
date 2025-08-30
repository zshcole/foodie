import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { SendIcon } from "./Icons";

export default function SendButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <SendIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    width: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1077AF",
  },
});
