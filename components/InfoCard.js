import { StyleSheet, Text, View } from "react-native";
import * as Progress from "expo-progress";
import { useNavigation } from '@react-navigation/native';
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

function InfoCardSimple({ task }) {
  const navigation = useNavigation()
  const onClick = () => {
    navigation.navigate("Goal Details", task)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.heading}>{task?.title || "InfoCard"}</Text>
        <Text style={styles.subheading}>{task?.completedTasks || 0} / {task?.totalTasks || 6} Tasks completed</Text>
      </TouchableOpacity>
    </View>
  );
}

function InfoCardExpanded({ goal }) {
  const nextTask = getNextTaskInGoal(goal);
  const percentageTasksCompleted = getPercentageTasksCompleted(goal);
  const navigation = useNavigation()
  const onClick = () => {
    navigation.navigate("Goal Details", task)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
      <Text style={styles.heading}>{goal.title}</Text>
      {nextTask && <Text style={styles.subheading}>{nextTask.title}</Text>}
      <Progress.Bar
        color="#EAAC30"
        progress={percentageTasksCompleted}
        trackColor="#EFF0F6"
        borderRadius={6}
        height={12}
        style={styles.bar}
      />
      <View style={styles.line}>
        <Text style={styles.percentage}>
          {Math.round(percentageTasksCompleted * 100)}%{" "}
        </Text>
        <Text style={styles.text}>Complete</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderColor: "#20232a",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
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
    paddingRight: 10,
    alignSelf: "center",
  },
});
export { InfoCardSimple, InfoCardExpanded };
