import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import PetScreen from "../screens/PetScreen";
import ToDoScreen from "../screens/ToDoScreen";
import GoalDetailsScreen from "../screens/GoalDetailsScreen";
import { initMockState } from "../lib/mocks";
import GoalCreateScreen from "../screens/GoalCreateScreen";
import ToDoScreen from "../screens/ToDoScreen"
import GoalStackNavigator from "./GoalStackNavigator";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  useEffect(() => {
    initMockState();
  }, []);

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
          children={() => <HomeScreen />}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="To Do"
          children={() => <ToDoScreen />}
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
          name="GoalDetails"
          component={GoalDetailsScreen}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabBar;
