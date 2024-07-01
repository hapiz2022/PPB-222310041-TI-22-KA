import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const LogoSection = () => {
    return (
        <View style={styles.logoContainer}>
            <Image source={require("../../assets/ibik.png")} style={{ width: 100, height: 100 }} />
        </View>
    )
}

export default LogoSection

const styles = StyleSheet.create({
    logoContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple'
    }
})