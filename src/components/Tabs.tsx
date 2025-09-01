import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const tabsArr = ["Live", "Recorded"];
const ACTIVE_TAB = "#75563B";
const ACTIVE_TEXT = "#ffffff";
const INACTIVE_TEXT = "#2C2016";

export default function TabsComponent() {
  const [active, setActive] = useState("Live");
  return (
    <View style={styles.container}>
      {tabsArr.map((tabName) => {
        const isActive = active === tabName;
        return (
          <TouchableOpacity
            style={[styles.button, isActive && { backgroundColor: ACTIVE_TAB }]}
          >
            <Text
              style={isActive ? styles.activeText : styles.inactiveText}
              onPress={() => setActive(tabName)}
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: "#F5F5F4",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
  button: {
    height: 32,
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    color: ACTIVE_TEXT,
    fontSize: 14,
    fontWeight: "semibold",
  },
  inactiveText: {
    color: INACTIVE_TEXT,
    fontSize: 14,
    fontWeight: "semibold",
  },
});
