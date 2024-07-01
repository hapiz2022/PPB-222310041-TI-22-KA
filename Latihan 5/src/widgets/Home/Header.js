import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Header = () => {
    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.account}>
                <Image source={require('../../../assets/icons/icon-boy-1.png')} style={headerStyles.prof_img} />
                <View>
                    <Text style={{ ...headerStyles.profile, fontWeight: "bold", fontSize: 20 }}>
                        HAPIZ ILHAM MAULANA
                    </Text>
                    <Text style={headerStyles.profile}>222310041</Text>
                </View>
            </View>
            <View>
                <Pressable>
                    <FontAwesome5 name='bell' size={25} color={'white'} />
                </Pressable>
            </View>
        </View>
    )
}

const headerStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        paddingTop: 20
    },
    account: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    prof_img: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#f0f8ff",
        marginRight: 15,
    },
    profile: { fontSize: 16, color: "white", textAlign: "left" }
});

export default Header