import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Calendar from './Calendar'

const ScheduleSection = () => {
    return (
        <View style={styles.container}>
            <Calendar />
            <View style={styles.scheduleList}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 15 }}>Schedule for Today</Text>
                <Text style={{ fontSize: 14, marginBottom: 15 }}>No record found</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: 'white',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    scheduleList: {
        marginHorizontal: 15
    }
})

export default ScheduleSection