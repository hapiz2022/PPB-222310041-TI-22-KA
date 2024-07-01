import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const FriendlistUI = ({ items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.user_account}>
        {items.gender === "M" ? (
          <Image
            source={require("../../../../assets/icons/boy.png")}
            style={styles.user_ava}
          />
        ) : (
          <Image
            source={require("../../../../assets/icons/girl.png")}
            style={styles.user_ava}
          />
        )}
        <View>
          <Text style={{ color: "white" }}>{items.name}</Text>
          <Text style={styles.text}>{items.fullname}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.6} style={styles.btn_follow}>
          <Text style={styles.text}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  user_account: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  user_ava: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#f0f8ff",
    marginRight: 15,
  },

  text: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },

  btn_follow: {
    backgroundColor: "purple",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default FriendlistUI;
