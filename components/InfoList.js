import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import InfoCard from "./InfoCard";

function InfoList({ toDoList, expanded, onGoalClick }) {
  console.log(toDoList);
  const renderItem = (item) => (
    <>
      {!toDoList || toDoList.length == 0 ? (
        <View style={styles.container}>
          <Text>Add some goals</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            onGoalClick && onGoalClick(item.item.id);
          }}
        >
          <InfoCard goal={item.item} progress={expanded} />
        </TouchableOpacity>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        //ListFooterComponent={listFooterComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignSelf: "stretch",
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
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    lineHeight: 32,
    color: "#6E7191",
  },
  percentage: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    lineHeight: 32,
    color: "#14142B",
    paddingRight: 10,
  },
});
export default InfoList;
