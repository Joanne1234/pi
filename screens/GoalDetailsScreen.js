import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { PercentageCompleteText } from "../components/InfoCard";
import { ProgressList, CheckBoxItem } from "../components/ProgressList";
import Signature, {readSignature, clearSignature} from 'react-native-signature-canvas';
import * as FileSystem from "expo-file-system";
import { CanvasButton } from "../components/Button";

function GoalDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const goal = route.params.goal
  const [change, setChange] = useState(0)
  const [signature, setSignature] = useState(goal.canvas || null)
  useEffect(() => {
    navigation.setOptions({ title: goal.title });
  }, [])
  useEffect((goal) => {
    //rerender
    console.log("goal changed")
  }, [change])
  const editCanvas = () => {
    navigation.navigate("Edit Canvas", { setCanvas: setSignature, canvas: signature, title: goal.title })
  }
  return (
    <View style={styles.container}>
      <View style={styles.status}>
      <PercentageCompleteText style={styles.percentage} goal={goal}/>
      <Text style={styles.text}>days</Text>
      </View>
      <View style={[styles.preview, {display: signature ? "block" : "none"}]}>
        {signature ? (
          <View>
          <Image
            resizeMode={"contain"}
            style={{ width: "90%", height: "30%" }}
            source={{ uri: signature }}
          />
          <CanvasButton text="Edit" onClick={editCanvas}/>
          </View>
        ) : null}
      </View>
      <View style={{display: signature ? "none" : "block"}}>
        <CanvasButton text="Add drawing" onClick={editCanvas}/>
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
  },
  preview: {
    width: "90%",
    height: "30%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "green",
    width: 120,
    textAlign: "center",
    marginTop: 10
  },
  canvas: {
    width: "90%",
    height: "30%"
  }
});
export default GoalDetailsScreen;
