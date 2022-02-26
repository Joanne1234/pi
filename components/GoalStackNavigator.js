import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "../screens/ToDoScreen";
import CreateGoalScreen from "../screens/CreateGoalScreen";
import GoalDetailsScreen from "../screens/GoalDetailsScreen";

const Stack = createStackNavigator();

function GoalStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
      <Stack.Screen name="Create Goal" component={CreateGoalScreen} />
      <Stack.Screen name="Goal Details" component={GoalDetailsScreen} />
    </Stack.Navigator>
  );
}

export default GoalStackNavigator;