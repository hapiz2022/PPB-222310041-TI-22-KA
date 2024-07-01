import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const LoadingSection = () => {
    return (
        <View style={styles.loadingContainer}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

export default LoadingSection

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
    },
    text: {
        color: 'white'
    }
})