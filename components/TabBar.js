import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import PetScreen from "../screens/PetScreen";
import GoalCreateScreen from "../screens/GoalCreateScreen";
import ToDoScreen from "../screens/ToDoScreen";
import GoalStackNavigator from "./GoalStackNavigator";

const Tab = createBottomTabNavigator();

function TabBar() {
  const toDoList = [
    {
      id: 1,
      title: "House Work",
      targetDate: "2022-02-27",
      tasks: [
        {
          id: 1,
          title: "Vacuum",
          completed: true,
        },
        {
          id: 2,
          title: "Wash",
          completed: false,
        },
        {
          id: 3,
          title: "Mop",
          completed: true,
        },
      ],
    },
    {
      id: 2,
      title: "English Report",
      targetDate: "2022-02-27",
      tasks: [
        {
          id: 1,
          title: "Introduction",
          completed: true,
        },
        {
          id: 2,
          title: "Reading",
          completed: true,
        },
        {
          id: 3,
          title: "Writing",
          completed: false,
        },
      ],
    },
  ];
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
          children={() => <HomeScreen toDoList={toDoList} />}
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
        <Tab.Screen
          name="GoalCreate"
          component={GoalCreateScreen}
          options={{
            tabBarButton: () => null,
            tabBarStyle: {
              display: "none",
            },
            headerStyle: {
              backgroundColor: "#EAAC30",
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerTitleStyle: {
              fontFamily: "Poppins_700Bold",
              fontSize: 17,
              lineHeight: 28,
              color: "#FCFCFC",
            },
          }}
        />
        <Tab.Screen name="GoalDetails" children={() => <GoalDetailsScreen goal={goal}/>} initialParams={toDoList.length > 1 ? toDoList[0] : {}}
          options={{
            tabBarButton: () => null,
            tabBarStyle: {
              display: "none",
            },
            headerStyle: {
              backgroundColor: "#EAAC30",
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerTitleStyle: {
              fontFamily: "Poppins_700Bold",
              fontSize: 17,
              lineHeight: 28,
              color: "#FCFCFC",
            },
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabBar;
