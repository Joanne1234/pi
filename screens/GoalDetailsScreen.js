import { StyleSheet, Text, View } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect } from "react";
import { PercentageCompleteText } from "../components/InfoCard";

function GoalDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const goal = route.params.goal
  console.log(goal)
  useEffect(() => {
    navigation.setOptions({ title: goal.title });
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.status}>
      <PercentageCompleteText goal={goal}/>
      <Text style={styles.text}>days</Text>
      </View>
      <Text>Complete</Text>
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
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#14142B",
    alignSelf: "flex-end",
  },
  status: {
    flexDirection: "row",
    alignContent: "space-between",
  },
});
export default GoalDetailsScreen;
