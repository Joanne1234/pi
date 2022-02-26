import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import InfoList from "../components/InfoList";

function HomeScreen({ toDoList }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Goals</Text>
      <InfoList
        expanded={true}
        toDoList={toDoList || []}
        onGoalClick={(goalId) =>
          navigation.navigate("GoalDetails", { goalId: 1 })
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
