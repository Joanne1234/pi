import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import InfoList from "../components/InfoList";
import { getGoals, deleteAllGoals } from "../lib/goals-helper";

function HomeScreen() {
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
      <Text style={styles.heading}>My Goals</Text>
      <InfoList
        expanded={true}
        toDoList={todoList || []}
        onGoalClick={(goalId) => navigation.navigate("GoalDetails", { goalId })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FC",
    alignSelf: "stretch",
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
});
export default HomeScreen;
