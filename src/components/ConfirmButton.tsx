import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ConfirmButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>PAY & CONFIRM</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 62,
    backgroundColor: "#FF7622",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    marginStart: 16,
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});
