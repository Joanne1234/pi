import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import moment from "moment";
import InputCard from "../components/InputCard";
import { PercentageCompleteText } from "../components/InfoCard";
import { ProgressList, CheckBoxItem } from "../components/ProgressList";
import { getGoal, addTask } from "../lib/goals-helper";

// use moment to get days till date
const getDays = (dateString) => {
  const date = moment(dateString, "YYYY-MM-DD");
  const now = moment();
  const duration = moment.duration(date.diff(now));
  return Math.ceil(duration.asDays());
};

const GoalDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [taskValue, setTaskValue] = useState("");
  const [change, setChange] = useState(0);

  const [goal, setGoal] = useState({});

  const fetchGoal = async () => {
    const currentGoal = await getGoal(route.params.goalId);
    setGoal({ ...currentGoal });
    navigation.setOptions({ title: currentGoal.title });
  };

  useEffect(() => {
    setGoal({});
    fetchGoal();
  }, [route.params.goalId, change]);

  const Days = () => {
    const daysLeft = getDays(goal.targetDate);
    return (
      <Text style={styles.text}>
        {daysLeft > 0
          ? `${daysLeft} Days`
          : daysLeft === 0
          ? "Today"
          : "Overdue"}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {Object.keys(goal).length > 0 && (
        <>
          <View style={styles.status}>
            <PercentageCompleteText style={styles.percentage} goal={goal} />
            {goal?.targetDate && <Days />}
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
                  setTaskValue(val);
                }}
                placeholder="Task title"
                value={taskValue}
                onSubmitEditing={async () => {
                  if (taskValue !== "") {
                    await addTask(route.params.goalId, taskValue);
                    setTaskValue("");
                    setChange(change + 1);
                  }
                }}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FC",
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
    paddingTop: 25,
    paddingBottom: 5,
  },
  percentage: {
    alignSelf: "center",
  },
});
export default GoalDetailsScreen;
