import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import PetScreen from "../screens/PetScreen";
import ToDoScreen from "../screens/ToDoScreen"
import GoalStackNavigator from "./GoalStackNavigator";

const Tab = createBottomTabNavigator();

function TabBar() {
  const toDoList = [
    {
      id: 1,
      title: "House Work",
      description: "Vacuum bedroom",
      completedTasks: 1,
      totalTasks: 2
    },
    {
      id: 2,
      title: "English Report",
      description: "Complete Bibliography",
      completedTasks: 0,
      totalTasks: 1
    },
    {
      id: 3,
      title: "English Report",
      description: "Complete Bibliography",
      completedTasks: 0,
      totalTasks: 1
    },
    {
      id: 4,
      title: "English Report",
      description: "Complete Bibliography",
      completedTasks: 0,
      totalTasks: 1
    },
  ]
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={{
          tabBarActiveTintColor: "#eaac30",
          tabBarInactiveTintColor: "#14142B",
          tabBarLabel: "",
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#ffffff",
            borderTopWidth: 0,
            elevation: 0,
            height: 56,
            paddingTop: 16,
            paddingBottom: 16,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          children={() => <HomeScreen toDoList={toDoList}/>}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="To Do"
          children={() => <GoalStackNavigator toDoList={toDoList}/>}
          options={{
            tabBarLabel: "To Do",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="format-list-bulleted-square"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pet"
          component={PetScreen}
          options={{
            tabBarLabel: "Pet",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="paw" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabBar;
