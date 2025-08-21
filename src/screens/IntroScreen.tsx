import React from 'react'
import { StyleSheet, View } from 'react-native'
import FoodLogo from '../assets/svg/FoodLogo'
import SunImage from '../assets/svg/SunImage'

function IntroScreen() {
  return (
    <View style={styles.container}>
        <FoodLogo />
        <SunImage style={styles.sunImage} />
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sunImage: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})
