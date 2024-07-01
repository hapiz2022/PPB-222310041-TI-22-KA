import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import SearchBarUI from './widgets/SearchBarUI';
import ExpScrollView from './modules/ExpScrollView';
import { Users } from '../const-data/Users';
class MyFriends extends Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar hidden={false} />
          <View style={styles.header}>
            <SearchBarUI />
          </View>
          <View style={styles.body}>
            <ExpScrollView Data={Users} />
          </View>
        </SafeAreaView>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: "White"
    },
    body: {
        flex: 9,
        backgroundColor: "White"
    }
})

export default MyFriends;
