import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import LoginForm from '../../widgets/LoginForm'
import Header from '../../widgets/Header'
import { StatusBar } from 'expo-status-bar'

export class LoginPage extends Component {
    render() {
        return (
            <SafeAreaView style={style.container}>
                <StatusBar style="dark" hidden={false} />
                <Header />
                <View style={{ flex: 4 }}>
                    <Image source={require("../../../assets/img/ibik.png")} resizeMode='cover' style={{ maxWidth: '100%', maxHeight: "110%" }} />
                </View>
                <LoginForm />
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default LoginPage