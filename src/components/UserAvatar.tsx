import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserAvatar() {
  return (
    <Image style={styles.avatar} source={{uri: "https://yt3.googleusercontent.com/8_sUGHA4WPR8pl6MbERPt1mYzcNutFapNcNAEkqsJuZKWNfejQgOaFqXOUJ9Vl7b9nbJrmRN=s900-c-k-c0x00ffffff-no-rj"}} />
  );
}


const styles = StyleSheet.create({
    avatar: {
        height: 32,
        width: 32,
        borderRadius: 16
    }
})

