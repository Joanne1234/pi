import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
// import { RoundedCheckbox } from "react-native-rounded-checkbox";
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
//import Checkbox from 'expo-checkbox';

function ProgressList({ tasks, completed, setChange }) {
  console.log(tasks, completed);
  var displayList = tasks.filter(function (task) {
    return task.completed == completed;
  });
  console.log(displayList);
  const renderItem = (item) => (
    <CheckBoxItem task={item.item} setChange={setChange} />
  );
  if (!displayList || displayList.length == 0) {
    return null;
  }
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: completed ? "#EAF9DE" : "#FFFFFF" },
      ]}
    >
      <FlatList
        data={displayList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        //ListFooterComponent={listFooterComponent}
      />
    </View>
  );
}

function CheckBoxItem({ task, setChange }) {
  const [completed, setCompleted] = useState(task.completed);
  useEffect(() => {
    console.log(task.title, " Completed ", completed);
  }, [completed]);
  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: completed ? "#EAF9DE" : "#FFFFFF" },
      ]}
    >
      <View style={styles.checkBox}>
        {/*<RoundedCheckbox
          onPress={(checked) => {
            setCompleted(checked);
            setChange(Math.random().toString(36));
            // update async storage
          }}
          checkedColor="#008A00"
          uncheckedColor="#D9DBE9"
          checkedTextColor="#FCFCFC"
          uncheckedTextColor="#D9DBE9"
          text="✓"
          textStyle={styles.check}
          isChecked={task.completed}
          outerStyle
        />*/}
        <CheckBox
          checked={task.completed}
          onChange={() => {
            // updateTask(task.id, !completed);
          }}
        />
      </View>
      <Text
        style={[
          styles.text,
          {
            color: completed ? "#008A00" : "#4E4B66",
            textDecorationLine: completed ? "line-through" : "none",
          },
        ]}
      >
        {task.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    margin: 10,
    borderRadius: 24,
    marginBottom: 20,
    padding: 10,
  },
  heading: {
    fontFamily: "Poppins_700Bold",
    fontSize: 36,
    lineHeight: 48,
    color: "#14142B",
  },
  subheading: {
    fontFamily: "Poppins_400Regular",
    fontSize: 24,
    lineHeight: 32,
    color: "#6E7191",
  },
  bar: {
    marginVertical: 10,
  },
  line: {
    flexDirection: "row",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 17,
    lineHeight: 28,
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  percentage: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    lineHeight: 32,
    color: "#14142B",
    paddingRight: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    paddingVertical: 10,
  },
  check: {
    alignSelf: "center",
  },
  checkBox: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});
export { ProgressList, CheckBoxItem };
