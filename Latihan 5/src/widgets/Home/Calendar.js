import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Calendar = () => {
    const FirstWeek = () => {
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var day = [];
        for (let index = 0; index < 7; index++) {
            day.push(
                <View key={index} style={style.call_box}>
                    <Text style={{ ...style.call_text, marginBottom: 10 }}>
                        {days[index]}
                    </Text>
                    <Text>{index + 1}</Text>
                </View>
            );
        }
        return day;
    }
    return (
        <View style={style.calendar_container}>
            <FirstWeek />
        </View>
    )
}

const style = StyleSheet.create({
    calendar_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15,
        marginVertical: 25,
        borderWidth: 2,
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: 'blue'
    },
    call_box: {
        width: 50,
        flexDirection: "column",
        alignItems: "center",
    },
    call_text: {
        fontSize: 16,
        paddingVertical: 5,
    },
    call_curr: {
        padding: 10,
        backgroundColor: "purple",
        color: "white"
    }
});

export default Calendar