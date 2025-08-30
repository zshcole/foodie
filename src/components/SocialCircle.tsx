import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function SocialCircle() {
  return (
    <View style={styles.container}>
      <Text>Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    width: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#E4E6E8",
    borderWidth: 1,
  },
});
