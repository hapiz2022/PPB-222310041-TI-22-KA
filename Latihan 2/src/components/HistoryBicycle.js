import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const HistoryBicycle = () => {
    return (
        <View style={styles.border}>
            <Text
                style={
                    {
                        fontSize: 20,
                        fontWeight: "bold",
                        backgroundColor: "brown",
                        color: "#fff",
                        textAlign: "center",
                        textDecorationLine: "underline",
                        padding: 10,
                        marginBottom: 10
                    }
                }
            >
                History of Bicycle
            </Text>

            <Text style={styles.paragraph}>
                A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
            </Text>
        </View>
    )
}

export default HistoryBicycle

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 18,
        textAlign: "justify",
    },
    border: {
        borderWidth: 1,
        borderColor: "black",
        width: "50%"
    }
})