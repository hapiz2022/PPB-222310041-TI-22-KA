import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Header from '../../widgets/Home/Header';
import CardMenu from '../../widgets/Home/CardMenu';
import ScheduleSection from '../../widgets/Home/ScheduleSection';

export class HomePage extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <CardMenu />
                <ScheduleSection />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5600B2',
    }
});

export default HomePage