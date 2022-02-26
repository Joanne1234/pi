import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "../screens/ToDoScreen";
import CreateGoalScreen from "../screens/CreateGoalScreen";
import GoalDetailsScreen from "../screens/GoalDetailsScreen";
import EditCanvasScreen from "../screens/EditCanvasScreen";

const Stack = createStackNavigator();

function GoalStackNavigator({ toDoList, goal }) {
  return (
    <Stack.Navigator initialRouteName="ToDoScreen">
      <Stack.Screen name="To Do List" children={() => <ToDoScreen toDoList={toDoList}/>} />
      <Stack.Screen name="Create Goal" component={CreateGoalScreen} />
      <Stack.Screen name="Goal Details" children={() => <GoalDetailsScreen goal={goal}/>} />
      <Stack.Screen name="Edit Canvas" children={() => <EditCanvasScreen setCanvas={()=>{}} canvas={null}/>}/>
    </Stack.Navigator>
  );
}

export default GoalStackNavigator;