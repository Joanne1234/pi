import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CheckBox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handlePress = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.checkbox}>
        {isChecked && (
          <View style={styles.checkboxChecked}>
            <MaterialCommunityIcons name="check" size={20} color="white" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 36,
    height: 36,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: "#008A00",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckBox;
