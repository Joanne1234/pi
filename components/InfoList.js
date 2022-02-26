import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { InfoCardExpanded, InfoCardSimple } from "./InfoCard";

function InfoList({ toDoList, expanded, listFooterComponent }) {
  const renderItem = (item) => {
    if (expanded) {
      return (<InfoCardExpanded task={item.item}/>)
    } 
    return (<InfoCardSimple task={item.item}/>)
  }
  if (!toDoList || toDoList.length == 0) {
    return (
      <View style={styles.container}>
        <Text>Add some goals</Text>
      </View>
    )
  }
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
    alignSelf: 'stretch',
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
