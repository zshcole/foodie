import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';

export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <UserAvatar />
      <BackButton />
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})
