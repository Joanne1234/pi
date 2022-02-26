import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputCard from "../components/InputCard";

const GoalDetailsScreen = ({ route }) => {
  const { goalId } = route.params;

  const [taskValue, setTaskValue] = useState("");
  return (
    <View>
      <Text>{goalId}</Text>
      <View style={styles.footerWrapper}>
        <Text style={styles.heading}>Add task to goal</Text>
        <View style={styles.inputContainer}>
          <InputCard
            onChange={(val) => {
              setTaskValue(val);
            }}
            placeholder="Task title"
            value={taskValue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
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
export default GoalDetailsScreen;
