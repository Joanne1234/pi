import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import Signature, {readSignature, clearSignature} from 'react-native-signature-canvas';
import { CanvasButton } from "../components/Button";

function EditCanvasScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const canvas = route.params.canvas
  const finaliseChange = route.params.setCanvas
  const title = route.params.title
  const ref = useRef();

  const handleClear = () => {
    ref.current.clearSignature();
  }
  const handleSignature = (sign) => {
    //finaliseChange(ref.current.getData())
    ref.current.readSignature();
  }
  return (
    <View style={styles.container}>
      <Signature
        ref={ref}
        onOK={finaliseChange}
        descriptionText={title}
        clearText="Clear"
        confirmText="Save"
        webStyle={`.m-signature-pad--footer {display: none; margin: 0px;}`}
      />
      <CanvasButton text="Save" onClick={handleSignature}/>
      <CanvasButton text="Clear" onClick={handleClear}/>
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
    width: "90%",
    height: "70%"
  }
});
export default EditCanvasScreen;
