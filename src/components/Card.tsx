import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import VideoIcon from "./Icons";

const PhoneWidth = Dimensions.get("window").width;
const cardWidth = (PhoneWidth - 16 * 3) / 2;

interface Props {
  image: string;
  title: string;
  date: string;
}

export default function Card({ image, title, date }: Props) {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: image,
      }}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.pill}>
        <Text style={styles.status}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.dateContainer}>
          <VideoIcon />
          <Text style={styles.cardDate}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 161,
    width: cardWidth,
    borderRadius: 12,
    margin: 12,
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
