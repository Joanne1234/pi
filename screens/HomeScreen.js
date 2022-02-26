import { StyleSheet, Text, View } from "react-native";
import {InfoCardSimple, InfoCardExpanded} from "../components/InfoCard";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Goals</Text>
      <InfoCardSimple/>
      <InfoCardExpanded/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
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
export default HomeScreen;
