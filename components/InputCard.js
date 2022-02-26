import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const InputCard = ({ placeholder, value, onChange }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  input: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "#6E7191",
    backgroundColor: "#EFF0F6",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 16,
    alignSelf: "stretch",
  },
});

export default InputCard;
