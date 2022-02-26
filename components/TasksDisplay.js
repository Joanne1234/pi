import { StyleSheet, Text, View } from "react-native";

const getCompletedTasks = (tasks) => {
  return tasks.filter((task) => task.completed);
};

const getUncompletedTasks = (tasks) => {
  return tasks.filter((task) => !task.completed);
};

const TasksDisplay = ({ tasks }) => {
  const completedItems = getCompletedTasks(tasks);
  const uncompletedItems = getUncompletedTasks(tasks);
  return (
    <View>
      <Text>In development</Text>
    </View>
  );
};

export default TasksDisplay;
