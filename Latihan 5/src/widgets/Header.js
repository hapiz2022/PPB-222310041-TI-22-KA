import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={style.title}>
            <Image source={require("../../assets/icons/icon-ibik.png")} style={style.ibik_icon} />
            <View style={{ margin: 10 }}>
                <Text style={style.titleText}>IBI Kesatuan</Text>
                <Text style={style.subTitleText}>Bogor Indonesia</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    titleText: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 20

    },
    subTitleText: {
        color: 'purple'
    },
    ibik_icon: {
        width: 50,
        height: 50,
        margin: 5
    }
})

export default Header