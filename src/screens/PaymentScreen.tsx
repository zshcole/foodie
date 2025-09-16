import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import PaymentList from "../components/PaymentList";
import BankCard from "../components/BankCard";
import AddNewButton from "../components/AddButton";
import ConfirmButton from "../components/ConfirmButton";
// Common Styles
import { commonStyles } from "../assets/styles/commonStyles";

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <View style={[commonStyles.row, styles.content]}>
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
      <View style={[commonStyles.row, styles.totalsContainer]}>
        <Text style={styles.total_price}>
          TOTAL: <Text style={styles.dollar_amount}>$96</Text>
        </Text>
      </View>
      <ConfirmButton />
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
  totalsContainer: {
    paddingVertical: 70,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  total_price: {
    color: "#A0A5BA",
    fontSize: 14,
    fontWeight: 400,
  },
  dollar_amount: {
    color: "#181C2E",
    fontSize: 30,
    fontWeight: 400,
  },
});
