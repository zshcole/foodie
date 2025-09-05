import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import TabsComponent from "../components/Tabs";
import Card from "../components/Card";
import { dummyData } from "../data/data";

export default function MeditationScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Meditations</Text>

        <Text style={styles.subHeader}>Lorem Ipsum is simply dummy text</Text>
        <TabsComponent />
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={dummyData}
        numColumns={2}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} date={item.date} />
        )}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          marginBottom: 16,
          justifyContent: "space-between",
        }}
      />
    </>
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
