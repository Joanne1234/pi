import { StyleSheet, Text, View } from "react-native";
import * as Progress from 'expo-progress';

function InfoCardSimple({ task }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{task?.title || "InfoCard"}</Text>
      <Text style={styles.subheading}>{task?.completedTasks || 0} / {task?.totalTasks || 6} Tasks completed</Text>
    </View>
  );
}

function InfoCardExpanded({ task }) {
  const progress = (task?.completedTasks || 0.5)/(task?.totalTasks || 1)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{task?.title || "InfoCard"}</Text>
      <Text style={styles.subheading}>{task?.description || "Expanded"}</Text>
      <Progress.Bar 
        color="#EAAC30" 
        progress={progress}
        trackColor="#EFF0F6"
        borderRadius={6}
        height={12}
        style={styles.bar}
        />
      <View style={styles.line}>
      <Text style={styles.percentage}>{progress*100}% </Text>
      <Text style={styles.text}>Complete</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderColor: '#20232a',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20, 
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  heading: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#14142B",
    paddingBottom: 10,
  },
  subheading: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "#6E7191",
    paddingBottom: 10,
  },
  bar: {
    marginVertical: 5,
  }, 
  line: {
    flexDirection: 'row'
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    lineHeight: 22,
    color: "#6E7191",
    alignSelf: 'center'
  },
  percentage: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#14142B",
    paddingRight: 10,
    alignSelf: 'center'
  }
});
export { InfoCardSimple, InfoCardExpanded };
