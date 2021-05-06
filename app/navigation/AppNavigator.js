import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import CalendarNavigator from "./CalendarNavigator";
import HomeNavigator from "./HomeNavigator";
import HomeScreen from "../screens/HomeScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import navigation from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          // tabBarButton: () => (
          //   <NewListingButton
          //   //onPress={() => navigation.navigate(routes.HOME)}
          //   />
          // ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
