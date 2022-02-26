import { StyleSheet, Text, View } from "react-native";
import { LinearProgress } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const getNextTaskInGoal = (goal) => {
  const tasks = goal.tasks;
  const completedTasks = tasks.filter((task) => task.completed);
  const nextTask = tasks.find((task) => !completedTasks.includes(task));
  return nextTask;
};

const getNumberOfTasksCompleted = (goal) => {
  const tasks = goal.tasks;
  const completedTasks = tasks.filter((task) => task.completed);
  return completedTasks.length;
};

const getPercentageTasksCompleted = (goal) => {
  const tasks = goal.tasks;
  const completedTaskAmount = getNumberOfTasksCompleted(goal);
  const percentage = completedTaskAmount / tasks.length;
  return percentage;
};

export const PercentageCompleteText = ({ goal }) => {
  return (
    <View style={styles.line}>
      <Text style={styles.percentage}>
        {Math.round(getPercentageTasksCompleted(goal) * 100)}%{" "}
      </Text>
      <Text style={styles.text}>Complete</Text>
    </View>
  );
};

const InfoCard = ({ goal, progress }) => {
  const nextTask = getNextTaskInGoal(goal);
  const completedTaskAmount = getNumberOfTasksCompleted(goal);
  const percentageTasksCompleted = getPercentageTasksCompleted(goal);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{goal.title}</Text>
      {!progress ? (
        <Text style={styles.subheading}>
          {completedTaskAmount}/{goal.tasks.length} Tasks completed
        </Text>
      ) : (
        <>
          {nextTask && <Text style={styles.subheading}>{nextTask.title}</Text>}
          <LinearProgress
            color="#EAAC30"
            value={percentageTasksCompleted}
            trackColor="#EFF0F6"
            borderRadius={6}
            height={12}
            style={styles.bar}
            variant="determinate"
          />
          <PercentageCompleteText goal={goal} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderColor: "#20232a",
    padding: 15,
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "stretch",
  },
  heading: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#14142B",
    paddingBottom: 10,
  },
  subheading: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "#6E7191",
    paddingBottom: 10,
  },
  bar: {
    marginVertical: 5,
    height: 12,
    marginTop: 24,
    borderRadius: 6,
  },
  line: {
    flexDirection: "row",
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    lineHeight: 22,
    color: "#6E7191",
    alignSelf: "center",
  },
  percentage: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#14142B",
    alignSelf: "center",
  },
});

export default InfoCard;
