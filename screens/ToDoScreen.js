import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import InfoList from "../components/InfoList";
import { getGoals } from "../lib/goals-helper";

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FC",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Poppins_700Bold",
    fontSize: 36,
    lineHeight: 48,
    color: "#14142B",
  },
});
export default ToDoScreen;
