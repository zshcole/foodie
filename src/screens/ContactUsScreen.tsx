import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import SendButton from "../components/SendButton";
import SocialCircle from "../components/SocialCircle";

export default function ContactUsScreen() {
  return (
    <>
      <View style={styles.container}>
        <Header />
      </View>
      <View>
        <SocialCircle />
        <SendButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
