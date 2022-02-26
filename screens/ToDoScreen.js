import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import InfoList from "../components/InfoList";
import { getGoals } from "../lib/goals-helper";
import CreateGoalButton from "../components/CreateGoalButton";

function ToDoScreen() {
  const [todoList, setTodoList] = useState([]);

  const fetchTodoList = async () => {
    const list = await getGoals();
    setTodoList([...list]);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To Do List</Text>
      <InfoList expanded={false} toDoList={todoList || []} />
      <CreateGoalButton style={styles.button} />
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
  list: {
    //flex: 3
  },
  button: {
    flex: 1,
  },
});
export default ToDoScreen;
