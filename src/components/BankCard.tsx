import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BankCard() {
  return (
    <View style={styles.container}>
      <Text>Bank Card component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 257,
    width: 340,
    borderRadius: 10,
    backgroundColor: "#F7F8F9",
  },
});
