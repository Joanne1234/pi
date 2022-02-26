import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import InfoList from "../components/InfoList";
import { getGoals } from "../lib/goals-helper";
import { CreateGoalButton } from "../components/Button";

function ToDoScreen() {
  const [todoList, setTodoList] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchTodoList = async () => {
    const list = await getGoals();
    setTodoList([...list]);
  };

  useEffect(() => {
    fetchTodoList();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To Do List</Text>
      <InfoList
        expanded={false}
        toDoList={todoList || []}
        onGoalClick={(goalId) => navigation.navigate("GoalDetails", { goalId })}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("CrateGoal");
        }}
      >
        <CreateGoalButton />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FC",
  },
  heading: {
    fontFamily: "Poppins_700Bold",
    fontSize: 36,
    lineHeight: 48,
    color: "#14142B",
    textAlign: "left",
    marginLeft: 24,
    marginRight: 24,
    marginTop: 50,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 68,
    left: 24,
    right: 24,
    alignItems: "center",
    zIndex: 3,
  },
});
export default ToDoScreen;
