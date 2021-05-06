import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";
import CalendarScreen from "../screens/CalendarScreen";

const Stack = createStackNavigator();

const CalendarNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Calendar" component={CalendarScreen} />
  </Stack.Navigator>
);

export default CalendarNavigator;
