import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateCard = ({ placeholder, value, onChange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");

  useEffect(() => {
    const dateString = new Date(date).toDateString();

    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();

    setText(`${day}/${month}/${year}`);
    onChange(`${year}-${month}-${day}`);
  }, [date]);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setShowDatePicker(true);
        }}
      >
        <TextInput
          style={styles.input}
          value={text}
          placeholder={placeholder}
          // prevent editing
          editable={false}
        />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={(_event, selectedDate) => {
            console.log(selectedDate);
            const currentDate = selectedDate || date;
            setShowDatePicker(false);
            setDate(currentDate);
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: "stretch",
  },
  input: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "#6E7191",
    backgroundColor: "#EFF0F6",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 16,
    alignSelf: "stretch",
  },
});

export default DateCard;
