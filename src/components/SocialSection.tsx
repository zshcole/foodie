import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SocialCircle from "./SocialCircle";
import SendButton from "./SendButton";

export default function SocialSection() {
  return (
    <View style={styles.container}>
      <SocialCircle />
      <Text style={styles.title}>WhatsApp</Text>
      <SendButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    paddingVertical: 15,
  },
  title: {
    marginStart: 14,
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: "#8083A3",
  },
});
