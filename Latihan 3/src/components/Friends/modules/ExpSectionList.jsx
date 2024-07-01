import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import FriendlistUI from "../widgets/FriendlistUI";

const ExpSectionList = ({ Data }) => {
  const data = [
    { title: "Suggested", data: Data },
    { title: "Followed", data: Data },
  ];
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <FriendlistUI items={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "white" }}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ExpSectionList;