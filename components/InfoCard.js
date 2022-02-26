import { StyleSheet, Text, View } from "react-native";
import { LinearProgress } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
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

function InfoCardSimple({ goal }) {
  const completedTaskAmount = getNumberOfTasksCompleted(goal);
  const navigation = useNavigation();
  const onClick = () => {
    console.log("onclick info card simple");
    navigation.navigate("Goal Details", { goal: goal });
    /*navigation.navigate("ToDo", {
      screen: "GoalDetails", 
      params: { goal: goal }
    })*/
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.heading}>{goal.title}</Text>
        <Text style={styles.subheading}>
          {completedTaskAmount}/{goal.tasks.length} Tasks completed
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function InfoCardExpanded({ goal }) {
  const nextTask = getNextTaskInGoal(goal);
  const percentageTasksCompleted = getPercentageTasksCompleted(goal);
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("To Do", {
      screen: "Goal Details",
      params: { goal: goal },
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.heading}>{goal.title}</Text>
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
      </TouchableOpacity>
    </View>
  );
}

function PercentageCompleteText({ goal }) {
  return (
    <View style={styles.line}>
      <Text style={styles.percentage}>
        {Math.round(getPercentageTasksCompleted(goal) * 100)}%{" "}
      </Text>
      <Text style={styles.text}>Complete</Text>
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
export {
  InfoCardSimple,
  InfoCardExpanded,
  PercentageCompleteText,
  getNextTaskInGoal,
  getNumberOfTasksCompleted,
  getPercentageTasksCompleted,
};
