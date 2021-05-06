import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListingEditScreen" component={ListingEditScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

//    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
//<Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
