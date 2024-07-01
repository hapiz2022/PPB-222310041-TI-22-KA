import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import LoadingSection from '../components/LoadingSection'
import LogoSection from '../components/LogoSection'

export class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LogoSection />
                <LoadingSection />
            </View>
        )
    }
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})