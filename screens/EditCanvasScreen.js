import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import Signature from 'react-native-signature-canvas';
import { CanvasButton } from "../components/Button";
import { getGoal } from "../lib/goals-helper";

function EditCanvasScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [goal, setGoal] = useState({});
  const ref = useRef();
  const setCanvas = route.params.setCanvas

  const fetchGoal = async () => {
    const currentGoal = await getGoal(route.params.goalId);
    setGoal({ ...currentGoal });
    navigation.setOptions({ title: currentGoal.title });
  };

  useEffect(() => {
    fetchGoal();
  }, [route.params.goalId]);

  const handleClear = () => {
    ref.current.clearSignature();
  }
  const handleSave = (canvas) => {
    ref.current.readSignature();
  }
  const onOK = (canvas) => {
    console.log("onOK", "canvas")
    setCanvas(canvas)
  }
  /*const updateGoal = (canvas) => {
    console.log("updateGoals..")
    const newGoal = Object.assign(goal, {canvas: canvas})
    console.log(newGoal, ".......................")
    updateGoal(route.params.goalId, newGoal)
  }*/
  return (
    <View style={styles.container}>
      <View style={styles.canvas}>
        <Signature
          ref={ref}
          onOK={onOK}
          descriptionText={goal?.title}
          webStyle={`.m-signature-pad--footer {display: none; margin: 0px;}`}
        />
      </View>
      <View style={styles.line}>
        <CanvasButton text="Save" onClick={handleSave}/>
        <CanvasButton text="Clear" onClick={handleClear} backgroundColor="#6E7191"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FC",
    alignItems: "center",
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
