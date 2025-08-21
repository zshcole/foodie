import React from 'react'
import { StyleSheet, View } from 'react-native'
import FoodLogo from '../assets/svg/FoodLogo'

function IntroScreen() {
  return (
    <View style={styles.container}>
        <FoodLogo />
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
    }
})
