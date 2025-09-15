import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import PaymentList from "../components/PaymentList";
import BankCard from "../components/BankCard";
import AddNewButton from "../components/AddButton";

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BackButton />
        <Text style={styles.header}>Payment</Text>
      </View>
      <PaymentList />
      <View style={styles.bankCardContainer}>
        <BankCard />
      </View>
      <View style={styles.addNewContainer}>
        <AddNewButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 17,
    fontWeight: "regular",
    color: "#181C2E",
    marginStart: 18,
  },
  bankCardContainer: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  addNewContainer: {
    paddingHorizontal: 16,
  },
});
