import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import SocialSection from "../components/SocialSection";

export default function ContactUsScreen() {
  return (
    <>
      <View style={styles.container}>
        <Header />
      </View>
      <Text style={styles.screenTitle}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialHeader}>Social Media Platforms</Text>
        <SocialSection />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  socialContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 10,
  },
  socialHeader: {
    color: "#000",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "semibold",
    fontFamily: "IBM Plex Sans Arabic",
  },
  screenTitle: {
    fontSize: 30,
    lineHeight: 36,
    color: "#000",
    fontWeight: "semibold",
    marginTop: 25,
    marginStart: 25,
  },
});
