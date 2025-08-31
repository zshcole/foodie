import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function BackButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>
        <Entypo name="chevron-left" size={24} color="black" />
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F4",
  },
});
