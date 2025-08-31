import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import SocialSection from "../components/SocialSection";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { socialPlatforms } from "../../config/icon-config";

export default function ContactUsScreen() {
  return (
    <>
      <View style={styles.container}>
        <Header />
      </View>
      <Text style={styles.screenTitle}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialHeader}>Social Media Platforms</Text>
        {socialPlatforms.map((platform) => {
          const IconComponent =
            platform.library === "FontAwesome"
              ? FontAwesome
              : platform.library === "AntDesign"
              ? AntDesign
              : platform.library === "MaterialIcons"
              ? MaterialIcons
              : FontAwesome; // default

          return (
            <SocialSection
              key={platform.id}
              title={platform.title}
              icon={
                <IconComponent
                  name={platform.name as any}
                  size={24}
                  color="#178AD9"
                />
              }
              onPress={platform.action}
            />
          );
        })}
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
