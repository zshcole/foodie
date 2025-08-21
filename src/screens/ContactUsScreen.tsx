import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserAvatar from '../components/UserAvatar';

export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <UserAvatar />
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})
