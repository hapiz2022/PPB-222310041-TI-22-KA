import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FriendlistUI from "../widgets/FriendlistUI";

const ExpFlatList = ({ Data }) => {
  return (
    <FlatList
      data={Data}
      renderItem={({ item }) => <FriendlistUI items={item} />}
    />
  );
};

const styles = StyleSheet.create({});

export default ExpFlatList;