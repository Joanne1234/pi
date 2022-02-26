import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import InputCard from "../components/InputCard";
import { PercentageCompleteText } from "../components/InfoCard";
import { ProgressList, CheckBoxItem } from "../components/ProgressList";
import { getGoal } from "../lib/goals-helper";

const GoalDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const goalId = route.params.goalId;
  const [change, setChange] = useState(0);

  const [goal, setGoal] = useState({});

  const fetchGoal = async () => {
    const currentGoal = await getGoal(goalId);
    console.log(currentGoal);
    console.log(goalId);
    console.log(route.params);
    setGoal({ ...currentGoal });
    navigation.setOptions({ title: currentGoal.title });
  };

  useEffect(() => {
    fetchGoal();
  }, []);

  return (
    <>
      {Object.keys(goal).length > 0 && (
        <View style={styles.container}>
          <View style={styles.status}>
            <PercentageCompleteText style={styles.percentage} goal={goal} />
            <Text style={styles.text}>days</Text>
          </View>
          <ProgressList
            tasks={goal.tasks}
            completed={true}
            setChange={setChange}
          />
          <ProgressList
            tasks={goal.tasks}
            completed={false}
            setChange={setChange}
          />
          <View style={styles.footerWrapper}>
            <Text style={styles.heading}>Add task to goal</Text>
            <View style={styles.inputContainer}>
              <InputCard
                onChange={(val) => {
                  // setTaskValue(val);
                }}
                placeholder="Task title"
                value={/*taskValue*/ ""}
              />
            </View>
          </View>
        </View>
      )}
    </>
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
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  status: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  percentage: {
    alignSelf: "center",
  },
});
export default GoalDetailsScreen;
