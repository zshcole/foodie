import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CashIcon } from "./Icons";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  isSelected: boolean;
  title: string;
  icon: React.ReactNode;
  onPress: any;
}

export default function PaymentMethod({
  isSelected = false,
  title,
  icon,
  onPress,
}: Props) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={{ width: 85 }}>
        {isSelected && (
          <View style={styles.checkMarkContainer}>
            <Ionicons name="checkmark" size={20} color="white" />
          </View>
        )}
        <View style={[styles.container, isSelected && styles.selectedPayment]}>
          {icon}
        </View>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: 85,
    borderRadius: 9,
    backgroundColor: "#F0F5FA",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 8,
    color: "#000",
    textAlign: "center",
  },
  selectedPayment: {
    width: 86,
    height: 72,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FF7622",
  },
  checkMarkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#FF7622",
    position: "absolute",
    zIndex: 1,
    top: 20,
    right: -10,
  },
});
