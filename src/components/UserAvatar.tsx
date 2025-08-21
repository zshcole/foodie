import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserAvatar() {
  return (
    <Image style={styles.avatar} source={{uri: "https://yt3.googleusercontent.com/ytc/AIdro_kj2UN0hFSfq1uQysiU5iBPycFbOpERdRWDGpQ6aYN37eI=s900-c-k-c0x00ffffff-no-rj"}} />
  );
}


const styles = StyleSheet.create({
    avatar: {
        height: 32,
        width: 32,
        borderRadius: 16
    }
})

