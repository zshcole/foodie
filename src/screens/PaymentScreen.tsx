import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.header}>Payment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 17,
    fontWeight: "regular",
    color: "#181C2E",
    marginTop: 7,
    paddingLeft: 20,
  },
});
