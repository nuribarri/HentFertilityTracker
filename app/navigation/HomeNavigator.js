import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ListingEditScreen from "../screens/ListingEditScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Messages"
      component={ListingEditScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
