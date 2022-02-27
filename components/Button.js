import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CreateGoalButton = () => (
  <View style={styles.container}>
    <View style={styles.button}>
      <Text style={styles.heading}>Create Goal</Text>
    </View>
  </View>
);

function CanvasButton({ text, onClick }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.heading}>{text || ""}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAAC30",
    paddingTop: 16,
    paddingBottom: 16,
    alignSelf: "stretch",
    alignItems: "stretch",
    borderRadius: 24,
    margin: 5,
  },
  heading: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    lineHeight: 24,
    color: "#FCFCFC",
    letterSpacing: 0.75,
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
  },
  smallContainer: {
    backgroundColor: "#EAAC30",
    padding: 12,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    borderRadius: 5,
    margin: 5
  }
});

export { CreateGoalButton, CanvasButton };
