import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

function CreateGoalButton() {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("Create Goal")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.heading}>Create Goal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAAC30",
    padding: 12,
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
  },
  button: {
    alignSelf: "center",
  },
});

export { CreateGoalButton };
