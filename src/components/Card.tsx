import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import VideoIcon from "./Icons";

export default function Card() {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://i.pinimg.com/736x/39/d4/ce/39d4ce426035d77ed11b6ab952c4a1b8.jpg",
      }}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.pill}>
        <Text style={styles.status}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Meditations</Text>
        <View style={styles.dateContainer}>
          <VideoIcon />
          <Text style={styles.cardDate}>31st Jan - 09:00 am</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 161,
    width: 155,
    borderRadius: 12,
    margin: 15,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    opacity: 0.8,
  },
  cardContent: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  cardDate: {
    fontSize: 12,
    fontWeight: "regular",
    color: "#ffffff",
  },
  pill: {
    height: 22,
    width: 40,
    position: "absolute",
    right: 10,
    backgroundColor: "#E41111",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  status: {
    color: "#ffffff",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
});
