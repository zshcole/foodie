import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Components
import BackButton from "../components/BackButton";
import PaymentList from "../components/PaymentList";
import BankCard from "../components/BankCard";
import AddNewButton from "../components/AddButton";
import ConfirmButton from "../components/ConfirmButton";
// Common Styles
import { commonStyles } from "../assets/styles/commonStyles";
import {
  FONT_SIZES,
  FONT_WEIGHTS,
  BORDER_RADIUS,
} from "../assets/styles/theme";

export default function PaymentScreen() {
  return (
    <View style={[commonStyles.grow, styles.container]}>
      <View
        style={[commonStyles.row, commonStyles.alignCenter, styles.content]}
      >
        <BackButton />
        <Text style={[styles.header]}>Payment</Text>
      </View>
      <PaymentList />
      <View style={styles.bankCardContainer}>
        <BankCard />
      </View>
      <View style={styles.addNewContainer}>
        <AddNewButton />
      </View>
      <View
        style={[
          commonStyles.row,
          commonStyles.alignCenter,
          styles.totalsContainer,
        ]}
      >
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
    paddingTop: 50,
  },
  content: {
    paddingHorizontal: 24,
  },
  header: {
    fontSize: FONT_SIZES.lg,
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
  },
  total_price: {
    color: "#A0A5BA",
    fontSize: FONT_SIZES.sm,
    fontWeight: 500,
  },
  dollar_amount: {
    color: "#181C2E",
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 400,
  },
});
