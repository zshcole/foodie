import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { CashIcon, MasterCard, PayPalIcon, VisaIcon } from "./Icons";
import PaymentMethod from "./PaymentMethod";

const paymentMethods = [
  { label: "Cash", icon: <CashIcon /> },
  { label: "Visa", icon: <VisaIcon /> },
  { label: "Master Card", icon: <MasterCard /> },
  { label: "PayPal", icon: <PayPalIcon /> },
];

export default function PaymentList() {
  const [selectedPayment, setSelectedPayment] = useState("");
  return (
    <View style={{ flexDirection: "row" }}>
      <FlatList
        horizontal
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PaymentMethod
            onPress={() => setSelectedPayment(item.label)}
            title={item.label}
            icon={item.icon}
            isSelected={selectedPayment === item.label}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 16 }}
      />
    </View>
  );
}
