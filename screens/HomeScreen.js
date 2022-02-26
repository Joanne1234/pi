import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import InfoList from "../components/InfoList";
import { getGoals } from "../lib/goals-helper";

function HomeScreen() {
  const navigation = useNavigation();
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
      <Text style={styles.heading}>My Goals</Text>
      <InfoList
        expanded={true}
        toDoList={todoList || []}
        onGoalClick={(goalId) =>
          navigation.navigate("Goal Details", { goalId })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FC",
    alignItems: "center",
  },
  heading: {
    fontFamily: "Poppins_700Bold",
    fontSize: 36,
    lineHeight: 48,
    color: "#14142B",
  },
});
export default HomeScreen;
