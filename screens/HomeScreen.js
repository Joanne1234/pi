import { StyleSheet, Text, View } from "react-native";
import InfoList from "../components/InfoList";

function HomeScreen({ navigation, toDoList }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Goals</Text>
      <InfoList expanded={true} toDoList={toDoList || []} />
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
