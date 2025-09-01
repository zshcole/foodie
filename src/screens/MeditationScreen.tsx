import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TabsComponent from "../components/Tabs";

export default function MeditationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meditations</Text>

      <Text style={styles.subHeader}>Lorem Ipsum is simply dummy text</Text>
      <TabsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#1D150F",
    marginBottom: 6,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#2C2016",
    marginBottom: 16,
  },
});
