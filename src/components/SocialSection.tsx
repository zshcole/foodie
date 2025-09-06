import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SendButton from "./SendButton";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export default function SocialSection({ icon, title }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
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
  circle: {
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
