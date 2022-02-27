import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import { toggleTask } from "../lib/goals-helper";

function ProgressList({ goalId, tasks, completed, setChange }) {
  var displayList = tasks.filter(function (task) {
    return task.completed == completed;
  });
  const renderItem = (item) => (
    <CheckBoxItem task={item.item} setChange={setChange} goalId={goalId} />
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

function CheckBoxItem({ task, setChange, goalId }) {
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
        <CheckBox
          checked={task.completed}
          onChange={async () => {
            await toggleTask(goalId, task.id);
            setChange();
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
