import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchBarUI = () => {
  return (
    <View style={styles.search_bar}>
      <View style={{ justifyContent: "center" }}>
        <FontAwesome5 name={"search"} size={18} color={"grey"} />
      </View>
      <TextInput style={styles.search_input} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  search_bar: {
    padding: 9,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },

  search_input: {
    fontSize: 20,
    width: "90%",
    marginLeft: 10,
  },
});

export default SearchBarUI;