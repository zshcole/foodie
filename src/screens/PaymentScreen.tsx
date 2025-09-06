import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import PaymentMethod from "../components/PaymentMethod";

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BackButton />
        <Text style={styles.header}>Payment</Text>
      </View>
      <PaymentMethod />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
  },
  header: {
    fontSize: 17,
    fontWeight: "regular",
    color: "#181C2E",
    marginStart: 18,
  },
});
