import { StyleSheet, Text, View } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { PercentageCompleteText } from "../components/InfoCard";
import { ProgressList, CheckBoxItem } from "../components/ProgressList"

function GoalDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const goal = route.params.goal
  const [change, setChange] = useState(0)
  useEffect(() => {
    navigation.setOptions({ title: goal.title });
  }, [])
  useEffect((goal) => {
    //rerender
    console.log("goal changed")
  }, [change])
  return (
    <View style={styles.container}>
      <View style={styles.status}>
      <PercentageCompleteText style={styles.percentage} goal={goal}/>
      <Text style={styles.text}>days</Text>
      </View>
      <ProgressList tasks={goal.tasks} completed={false} setChange={setChange}/>
      <ProgressList tasks={goal.tasks} completed={true} setChange={setChange}/>
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
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  status: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  percentage: {
    alignSelf: "center"
  }
});
export default GoalDetailsScreen;
