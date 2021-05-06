import { useEffect } from "react";
//import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};

//Permissions.askAsync(Permissions.NOTIFICATIONS)
