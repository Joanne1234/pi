import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import Signature from 'react-native-signature-canvas';
import { CanvasButton } from "../components/Button";
import { getGoal } from "../lib/goals-helper";

function EditCanvasScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const finaliseChange = route.params.setCanvas
  const [goal, setGoal] = useState({});
  const ref = useRef();

  const fetchGoal = async () => {
    const currentGoal = await getGoal(route.params.goalId);
    setGoal({ ...currentGoal });
    navigation.setOptions({ title: currentGoal.title });
  };

  useEffect(() => {
    setGoal({});
    fetchGoal();
  }, [route.params.goalId]);

  const handleClear = () => {
    ref.current.clearSignature();
  }
  const handleSignature = () => {
    ref.current.readSignature();
  }
  const updateGoal = async (canvas) => {
    const newGoal = Object.assign(goal, {canvas: canvas})
    updateGoal(route.params.goalId, newGoal)
  }
  return (
    <View style={styles.container}>
      <View style={styles.canvas}>
        <Signature
          ref={ref}
          onOK={updateGoal}
          descriptionText={goal?.title}
          clearText="Clear"
          confirmText="Save"
          webStyle={`.m-signature-pad--footer {display: none; margin: 0px;}`}
        />
      </View>
      <View style={styles.line}>
        <CanvasButton text="Save" onClick={handleSignature}/>
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