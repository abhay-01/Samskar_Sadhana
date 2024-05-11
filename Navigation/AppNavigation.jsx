import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import HomeScreen from "../Screens/HomeScreen";
import CourseDetails from "../Screens/CourseDetails";
import StoryWrite from "../Screens/StoryWrite";
import ReadStory from "../Screens/ReadStory";

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StoryWrite"
          component={StoryWrite}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReadStory"
          component={ReadStory}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
