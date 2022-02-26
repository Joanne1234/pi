import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputCard from "../components/InputCard";

function CreateGoalScreen() {
  const [title, setTitle] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.heading}>Add task to goal</Text>
        <View style={styles.inputContainer}>
          <InputCard
            onChange={(val) => {
              setTitle(val);
            }}
            placeholder="Goal title"
            value={title}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FC",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    fontFamily: "Poppins_700Bold",
    fontSize: 36,
    lineHeight: 48,
    color: "#14142B",
  },
  inputWrapper: {
    width: "100%",
    marginTop: 24,
  },
  inputContainer: {
    backgroundColor: "#FCFCFC",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 16,
    borderRadius: 24,
  },
  heading: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "#6E7191",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 0,
  },
});
export default CreateGoalScreen;
