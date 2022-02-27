import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import RNDraw from "rn-draw";
import InputCard from "../components/InputCard";
import { useNavigation } from "@react-navigation/native";
import DateCard from "../components/DateCard";
import { createGoal } from "../lib/goals-helper";

function CreateGoalScreen() {
  const [title, setTitle] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const { width } = Dimensions.get("window");

  const navigation = useNavigation();

  const submit = async () => {
    if (title !== "") {
      const goalId = await createGoal(
        title,
        completionDate !== "" ? completionDate : null
      );
      navigation.navigate("GoalDetails", { goalId });
    }
  };

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

      <View style={styles.inputWrapper}>
        <Text style={styles.heading}>Target completion date</Text>
        <View style={styles.inputContainer}>
          <DateCard
            onChange={(val) => {
              setCompletionDate(val);
            }}
            placeholder="Target completion date"
          />
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.heading}>Add drawing</Text>
        <View style={{ ...styles.drawingContainer, width: width - 48 }}>
          <RNDraw
            containerStyle={{
              backgroundColor: "#FCFCFC",
              width: width - 48,
              height: 400,
            }}
            color="#000000"
            strokeWidth={2}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          submit();
        }}
      >
        <Text style={styles.text}>Create</Text>
      </TouchableOpacity>
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
  drawingContainer: {
    backgroundColor: "#FCFCFC",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    margin: 16,
    borderRadius: 24,
    height: 400,
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
  button: {
    backgroundColor: "#EAAC30",
    paddingTop: 20,
    paddingBottom: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    alignItems: "center",
    zIndex: 3,
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#fcfcfc",
  },
});
export default CreateGoalScreen;
