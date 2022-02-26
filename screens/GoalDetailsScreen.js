import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import InputCard from "../components/InputCard";
import { PercentageCompleteText } from "../components/InfoCard";

const GoalDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [taskValue, setTaskValue] = useState("");

  const goal = route.params.goal;
  console.log(goal);
  useEffect(() => {
    navigation.setOptions({ title: goal.title });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.status}>
          <PercentageCompleteText goal={goal} />
          <Text style={styles.text}>days</Text>
        </View>
        <Text>Complete</Text>
      </View>

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
  container: {
    flex: 1,
  },
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
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#14142B",
    alignSelf: "flex-end",
  },
  status: {
    flexDirection: "row",
    alignContent: "space-between",
  },
});
export default GoalDetailsScreen;
