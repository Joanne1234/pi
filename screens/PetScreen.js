import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Video } from "expo-av";
import { Asset } from "expo-asset";
import InfoList from "../components/InfoList";

function PetScreen() {
  const { width } = Dimensions.get("window");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.videoWrapper}>
          <Video
            source={require("../assets/pet-1.mp4")}
            shouldPlay
            useNativeControls
            resizeMode="contain"
            isLooping
            style={{ width, height: width }}
          />
        </View>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.title}>Rewards</Text>
        <InfoList
          toDoList={[
            {
              title: "Pet Background",
              subheading: "Complete a goal 5 days in a row",
            },
            {
              title: "Pet Evolution",
              subheading: "Complete 7 more tasks",
            },
          ]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7fc",
    alignItems: "center",
  },
  videoWrapper: {
    backgroundColor: "#1D2A3C",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  listWrapper: {
    marginTop: -40,
    flex: 1,
    backgroundColor: "#f7f7fc",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: "#14142B",
    marginLeft: 24,
  },
});

export default PetScreen;
