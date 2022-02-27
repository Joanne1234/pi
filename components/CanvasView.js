import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Canvas } from "@benjeau/react-native-draw";
import { CanvasButton } from "../components/Button"
import { useEffect, useRef } from "react";

function CanvasView({ expanded, setImage, setPath, originalPath }) {
  const ref = useRef();
  const finaliseChange = () => {
    setImage(ref.current.getSvg())
    setPath(ref.current.getPaths())
  }
  const clearCanvas = () => {
    ref.current.clear()
  }
  return (
    <View style={styles.container}>
      <Canvas ref={ref} height={400} initialPaths={originalPath ||[]}/>
      {expanded && (<View style={styles.line}>
        <CanvasButton text="Save" onClick={finaliseChange}/>
        <CanvasButton text="Clear" onClick={clearCanvas} backgroundColor="#6E7191"/>
      </View>)}
    </View>
  )
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

export default CanvasView;