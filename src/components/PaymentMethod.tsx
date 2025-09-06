import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CashIcon } from "./Icons";

export default function PaymentMethod() {
  return (
    <>
      <View style={styles.container}>
        <CashIcon />
      </View>
      <Text style={styles.text}>Cash</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: 85,
    borderRadius: 9,
    backgroundColor: "#F0F5FA",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 8,
    color: "#000",
    marginStart: 25,
  },
});
