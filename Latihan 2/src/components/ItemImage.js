import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

const ItemImage = () => {
    return (
        <View style={styles.border}>
            <Image source={require('../../assets/icon-orang.png')} style={styles.gambar} />
        </View>
    )
}

export default ItemImage

const styles = StyleSheet.create({
    gambar: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "lightgray"
    },
    border: {
        borderWidth: 20,
        borderColor: "cyan"
    }
})