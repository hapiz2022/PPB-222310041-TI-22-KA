import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import HistoryBicycle from '../components/HistoryBicycle'
import ItemImage from '../components/ItemImage'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HistoryBicycle />
                <ItemImage />
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
});