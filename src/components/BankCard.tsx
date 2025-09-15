import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BankCardIcon } from "./Icons";

export default function BankCard() {
  return (
    <View style={styles.container}>
      <BankCardIcon />
      <Text style={styles.heading}>No master card added</Text>
      <Text style={styles.subHeading}>
        You can add a mastercard and save it for later.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 257,
    width: 340,
    borderRadius: 10,
    backgroundColor: "#F7F8F9",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#32343E",
    marginTop: 5,
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 15,
    fontWeight: "400",
    width: 266,
    textAlign: "center",
  },
});
