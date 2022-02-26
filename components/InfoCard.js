import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

function InfoCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>InfoCard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
export default InfoCard;
