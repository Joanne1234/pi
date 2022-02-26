import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "../screens/ToDoScreen";
import CreateGoalScreen from "../screens/CreateGoalScreen";
import GoalDetailsScreen from "../screens/GoalDetailsScreen";

const Stack = createStackNavigator();

function GoalStackNavigator({ toDoList, goal }) {
  return (
    <Stack.Navigator 
      initialRouteName="ToDoList"
    >
      <Stack.Screen name="ToDoList" children={() => <ToDoScreen toDoList={toDoList}/>} />
      <Stack.Screen name="CreateGoal" component={CreateGoalScreen} />
      <Stack.Screen name="GoalDetails" children={() => <GoalDetailsScreen goal={goal}/>} initialParams={toDoList.length > 1 ? toDoList[0] : {}}/>
    </Stack.Navigator>
  );
}

export default GoalStackNavigator;