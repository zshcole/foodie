import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AddNewIcon } from "./Icons";

export default function AddNewButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <AddNewIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 62,
    borderRadius: 10,
    borderColor: "#F0F5FA",
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    color: "#FF7622",
  },
});
