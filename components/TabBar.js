import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import PetScreen from "../screens/PetScreen";
import GoalDetailsScreen from "../screens/GoalDetailsScreen";
import { initMockState } from "../lib/mocks";
import ToDoScreen from "../screens/ToDoScreen";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  useEffect(() => {
    initMockState();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#eaac30",
          tabBarInactiveTintColor: "#14142B",
          tabBarLabel: "",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#ffffff",
            borderTopWidth: 0,
            elevation: 0,
            height: 106,
            paddingTop: 16,
            paddingBottom: 66,
          },
          headerTitleAlign: "center",
          headerLeft: () => <View />,
        }}
      >
        <Tab.Screen
          name="Home"
          children={() => <HomeScreen />}
          options={{
            headerShown: false,
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
            headerShown: false,
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
          children={() => <GoalDetailsScreen />}
          options={({ navigation }) => ({
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
            headerRight: (_props) => (
              <TouchableOpacity
                style={styles.closeStyles}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color="#FCFCFC"
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  closeStyles: {
    marginRight: 25,
  },
});

export default TabBar;
