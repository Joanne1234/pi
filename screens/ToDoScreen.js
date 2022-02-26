import { StyleSheet, View } from "react-native";
import { CreateGoalButton } from "../components/Button";
import InfoList from "../components/InfoList";

function ToDoScreen({ toDoList }) {
  return (
    <View style={styles.container}>
      <CreateGoalButton style={styles.button}/>
      <InfoList 
        style={styles.list} 
        expanded={false} 
        toDoList={toDoList || []}
        listFooterComponent={<CreateGoalButton style={styles.button}/>}
      />
      <CreateGoalButton style={styles.button}/>
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
    flex: 1
  }
});
export default ToDoScreen;
