import React from "react";
import { View, StyleSheet } from "react-native";
import UserAvatar from "./UserAvatar";
import BackButton from "./BackButton";

export default function Header() {
  return (
    <>
      <View style={styles.container}>
        <BackButton />
        <UserAvatar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 17,
  },
});
