import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "../screens/ToDoScreen";
import CreateGoalScreen from "../screens/CreateGoalScreen";
import GoalDetailsScreen from "../screens/GoalDetailsScreen";

const Stack = createStackNavigator();

function GoalStackNavigator({}) {
  return (
    <Stack.Navigator initialRouteName="ToDoScreen">
      <Stack.Screen name="To Do List" children={() => <ToDoScreen />} />
      <Stack.Screen name="Create Goal" component={CreateGoalScreen} />
      <Stack.Screen
        name="Goal Details"
        children={() => <GoalDetailsScreen />}
      />
    </Stack.Navigator>
  );
}

export default GoalStackNavigator;
