import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { getGoal, updateGoal } from "../lib/goals-helper";
import CanvasView from "../components/CanvasView";

function EditCanvasScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [goal, setGoal] = useState({});
  const [canvas, setChange] = useState(null)
  const [path, setPath] = useState([])

  const fetchGoal = async () => {
    const currentGoal = await getGoal(route.params.goalId);
    setGoal({ ...currentGoal });
    navigation.setOptions({ title: currentGoal.title });
    setPath(goal.path || [])
  };

  useEffect(() => {
    fetchGoal();
  }, [route.params.goalId]);

  useEffect(() => {
    const newGoal = Object.assign(goal, {canvas: canvas, path: path})
    updateGoal(route.params.goalId, newGoal)
  }, [canvas, path])

  return (
    <View style={styles.container}>
      <CanvasView setImage={setChange} setPath={setPath} expanded={true} originalPath={path}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FC",
    alignItems: "center",
    height: "60%"
  },

  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#14142B",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  canvas: {
    width: "100%",
    height: "50%",
    borderColor: "red",
    borderWidth: 1
  },
  line: {
    flexDirection: "column", //"row"
    padding: 20,
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
});
export default EditCanvasScreen;
