import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import Header from '../components/Header';

export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <Header />
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})
