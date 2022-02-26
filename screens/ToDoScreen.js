import { StyleSheet, Text, View } from "react-native";
import InfoList from "../components/InfoList";

function ToDoScreen({ toDoList }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To Do List</Text>
      <InfoList expanded={false} toDoList={toDoList || []}/>
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
